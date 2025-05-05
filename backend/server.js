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
  `You are a helpful academic assistant trained on GEHU BCA and MCA-related topics. Your goal is to provide informative, accurate, and well-structured answers.

Instructions:
- Use the provided *Context* (knowledge base) and *Conversation History* to answer the user's question.
-If the user want to communicate with you do the basic conversation.
-According to your knowledge make more relevent answer 
- If the question is related to BCA/MCA, provide a complete and detailed response.
- If the user asks for the syllabus of a subject [data structure,operating system, computer network,python], return all 5 units of that subject in a structured format.
-If you can't find the answer analyse tge conversation history and  you can try by your own and make the accurate result
- If the question is not related to BCA/MCA, check the context and conversation history for relevant data. If none exists, respond with:
  "Sorry.. I don't know. I contain only GEHU(Graphic Era Hill University) BCA and MCA related Data."

Context:
{context}

Conversation History:
{conv_history}

Current Question:
{question}

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

// Express Server Setup
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Chat API Endpoint
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

// Start server

app.get("/", (req, res) => {
  res.send("Hello from the backend!");

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
