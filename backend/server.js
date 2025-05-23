import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { combineDocument } from "./utils/combineDocument.js";
import { formatConversation } from "./utils/formatConversation.js";

// ENV
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const SUPABASE_URL = process.env.SUPERBASE_URL;
const SUPABASE_API_KEY = process.env.SUPERBASE_API_KEY;

// Embeddings and Supabase Vector Store
const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "embedding-001",
  apiKey: GOOGLE_API_KEY,
});
const client = createClient(SUPABASE_URL, SUPABASE_API_KEY);
const vectorStore = new SupabaseVectorStore(embeddings, {
  client,
  tableName: "documents",
  queryName: "match_documents",
});
const retriever = vectorStore.asRetriever();
// LLM and prompt
const llm = new ChatGoogleGenerativeAI({
  // model: "gemini-2.0-flash",
  model: "gemini-2.0-flash",
  apiKey: GOOGLE_API_KEY,
  temperature: 0.5,
  maxOutputTokens: 2048,
});
const answerPrompt = ChatPromptTemplate.fromTemplate(
  `You are an intelligent and helpful academic assistant trained specifically on GEHU (Graphic Era Hill University) BCA and MCA-related topics. Your primary role is to assist students by providing **accurate, verified, and structured answers** using both **retrieved database content** and your internal knowledge.

Instructions:
- Prioritize information retrieved from the *Context* (database).
- If the database information is incomplete or missing, supplement it with your own internal knowledge.
- Cross-check both sources (Context and internal knowledge) and resolve discrepancies logically.
- Clearly indicate if the answer is based on:
  - [✓] Database (trusted)
  - [~] AI Knowledge (model-generated)

Answering Guidelines:
1. For **BCA/MCA subject-related queries**:
   - Provide complete, clear, and structured answers.
   - Include explanations, definitions, examples, and diagrams (ASCII/text-based) or code snippets as needed.
   - If the user requests the **syllabus** of any subject (e.g., Data Structures, Operating Systems, Computer Networks, Python), return all **5 units** in a clean, structured format.

2. For **math, logic, or reasoning-based tasks**:
   - Solve them step-by-step.
   - Explain the thought process behind your answer.

3. For **basic conversation**, respond naturally and politely.

4. If the query is **outside the scope** of BCA/MCA or unrelated to GEHU academic content, respond with:
   "Sorry.. I don't know. I contain only GEHU (Graphic Era Hill University) BCA and MCA related data."

5. Always make a logical and helpful attempt, even when the context is limited.

Inputs:
- Context (database content): {context}
- Conversation History: {conv_history}
- Current Question: {question}

Output:
- Provide the final answer by merging and verifying information from both sources.

Answer:
`
);



// Main logic
async function answerUserQuestion(userQuestion, chatHistory) {
  const formattedHistory = formatConversation(chatHistory);
  const relevantDocs = await retriever.invoke(userQuestion);
  const context = await combineDocument.invoke(relevantDocs);

  const chain = answerPrompt.pipe(llm).pipe(new StringOutputParser());
  const answer = await chain.invoke({
    context,
    conv_history: formattedHistory,
    question: userQuestion,
  });
  return answer;
}

// server
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// chatting
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  try {
    const answer = await answerUserQuestion(message, history);
    res.json({ answer });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// home test

app.get("/", (req, res) => {
  res.send("Hello from the backend!");

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
