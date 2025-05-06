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
  `You are an intelligent and helpful academic assistant trained specifically on GEHU (Graphic Era Hill University) BCA and MCA-related topics. Your primary goal is to assist students by providing accurate, clear, and structured answers. You can also perform small tasks like math operations, general conversation, and logical reasoning when asked.

Instructions:
- Always prioritize accuracy and clarity in your responses.
- Use the provided *Context* and *Conversation History* to understand the user's intent before responding.
- For BCA/MCA academic queries:
  - Provide complete and well-structured answers, explaining concepts clearly.
  - Include examples, diagrams (text-based if needed), or code snippets when useful.
- If the user requests the **syllabus** of a subject like **Data Structure, Operating System, Computer Network, or Python**, return all 5 units in a clean and structured format.
- If the query involves **basic conversation**, respond politely and naturally.
- For **simple operations** (maths, logic, conversions, etc.), calculate and explain the result.
- If the query is **not related** to BCA/MCA and cannot be answered from the *Context* or *Conversation History*, politely respond with:
  "Sorry.. I don't know. I contain only GEHU (Graphic Era Hill University) BCA and MCA related data."
- If there's not enough context to answer accurately, make a logical attempt using your training and respond in the most helpful way.

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
