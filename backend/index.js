import { config } from "dotenv";
import fs from "fs";
import csv from "csv-parser";
import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

config();
const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GOOGLE_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Error: GOOGLE_API_KEY not found in environment variables");
  process.exit(1);
}

// -------------------------
// 1. Load CSV (text + embedding vectors)
// -------------------------
let CSV_DOCUMENTS = [];

function loadCSV(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(new Error(`CSV file not found at path: ${path}`));
      return;
    }

    const rows = [];
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (data) => {
        try {
          if (!data.text || !data.embedding) {
            console.log("Skipping row: missing text or embedding field");
            return;
          }

          const embedding = JSON.parse(data.embedding);
          
          if (!Array.isArray(embedding) || embedding.length === 0) {
            console.log("Skipping row: invalid embedding format");
            return;
          }

          rows.push({
            text: data.text.trim(),
            embedding: embedding,
          });
        } catch (err) {
          console.log("Invalid embedding row skipped:", err.message);
        }
      })
      .on("end", () => {
        if (rows.length === 0) {
          reject(new Error("No valid rows found in CSV"));
          return;
        }
        CSV_DOCUMENTS = rows;
        console.log(`✅ CSV loaded successfully: ${rows.length} documents`);
        console.log(`📊 Embedding dimension: ${rows[0].embedding.length}`);
        resolve();
      })
      .on("error", reject);
  });
}

// -------------------------
// 2. Cosine Similarity
// -------------------------
function cosineSimilarity(a, b) {
  if (a.length !== b.length) {
    throw new Error("Vectors must have the same length");
  }

  let dot = 0,
    magA = 0,
    magB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }

  const magnitude = Math.sqrt(magA) * Math.sqrt(magB);
  return magnitude === 0 ? 0 : dot / magnitude;
}

// -------------------------
// 3. Embed User Query Using Gemini
// -------------------------
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function embedQuery(question) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "text-embedding-004" 
    });

    const result = await model.embedContent(question);
    
    if (!result.embedding || !result.embedding.values) {
      throw new Error("Invalid embedding response from Gemini");
    }

    return result.embedding.values;
  } catch (error) {
    console.error("Error embedding query:", error.message);
    throw new Error(`Failed to generate embedding: ${error.message}`);
  }
}

// -------------------------
// 4. Retrieve Top K Similar Chunks
// -------------------------
function searchTopK(queryEmbedding, k = 3) {
  if (CSV_DOCUMENTS.length === 0) {
    return [];
  }

  const scored = CSV_DOCUMENTS.map((doc) => {
    try {
      return {
        text: doc.text,
        score: cosineSimilarity(queryEmbedding, doc.embedding),
      };
    } catch (error) {
      console.error("Error calculating similarity:", error.message);
      return { text: doc.text, score: 0 };
    }
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.min(k, scored.length));
}

// -------------------------
// 5. Use Gemini to Answer Based on Context
// -------------------------
async function generateAnswer(question, contextChunks) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    if (contextChunks.length === 0) {
      return "No relevant information found in the knowledge base. Please try rephrasing your question.";
    }

    const contextText = contextChunks
      .map((c, i) => `[Document ${i + 1}] (Relevance: ${(c.score * 100).toFixed(1)}%)\n${c.text}`)
      .join("\n\n");

    const prompt = `You are an intelligent assistant with access to a knowledge base. Answer the user's question using the provided context.

CONTEXT FROM KNOWLEDGE BASE:
${contextText}

USER QUESTION: ${question}

INSTRUCTIONS:
1. Answer primarily using information from the context above
2. If the context fully answers the question, provide a direct answer
3. If the context is incomplete, mention what information is available and what might be missing
4. Be concise and accurate
5. If the context is not relevant to the question, clearly state that

ANSWER:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating answer:", error.message);
    throw new Error(`Failed to generate answer: ${error.message}`);
  }
}

// -------------------------
// 6. API Routes
// -------------------------

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    documentsLoaded: CSV_DOCUMENTS.length,
    timestamp: new Date().toISOString(),
  });
});

// Main chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, topK = 3 } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ 
        error: "Invalid request: 'message' field is required and must be a string" 
      });
    }

    if (CSV_DOCUMENTS.length === 0) {
      return res.status(503).json({ 
        error: "Knowledge base not loaded. Please check server logs." 
      });
    }

    console.log(`\n🔍 Processing query: "${message}"`);

    // Step 1: Embed the user's question
    const qEmbedding = await embedQuery(message);
    console.log(`✅ Query embedded (${qEmbedding.length} dimensions)`);

    // Step 2: Retrieve top matching chunks
    const topChunks = searchTopK(qEmbedding, Math.min(topK, 10));
    console.log(`✅ Retrieved ${topChunks.length} relevant documents`);

    // Step 3: Generate answer using Gemini
    const answer = await generateAnswer(message, topChunks);
    console.log(`✅ Answer generated`);

    res.json({
      answer,
      sources: topChunks.map((chunk, i) => ({
        index: i + 1,
        relevance: (chunk.score * 100).toFixed(1) + "%",
        preview: chunk.text.substring(0, 150) + "...",
      })),
      metadata: {
        documentsSearched: CSV_DOCUMENTS.length,
        topMatches: topChunks.length,
      },
    });
  } catch (error) {
    console.error("❌ Error in /api/chat:", error);
    res.status(500).json({ 
      error: "Internal server error",
      message: error.message 
    });
  }
});

// -------------------------
// 7. Start Server After CSV Loads
// -------------------------
async function startServer() {
  try {
    console.log("🚀 Starting RAG server...");
    console.log("📁 Loading CSV data...");
    
    await loadCSV("./data.csv");
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`\n✨ Server running at http://localhost:${PORT}`);
      console.log(`📚 Knowledge base: ${CSV_DOCUMENTS.length} documents loaded`);
      console.log(`🔗 Endpoints:`);
      console.log(`   - POST http://localhost:${PORT}/api/chat`);
      console.log(`   - GET  http://localhost:${PORT}/api/health\n`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();