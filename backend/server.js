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
  `You are a knowledgeable and helpful academic assistant developed specifically for GEHU (Graphic Era Hill University) BCA and MCA students. Your primary role is to provide **accurate, structured, and student-friendly answers** using trusted data from the university database and your internal academic expertise.

Instructions:
- Always prioritize information from the *Context* (university database).
- If database content is incomplete or missing, confidently supplement with your own verified academic knowledge.
- Ensure all responses are clear, logical, and cross-verified when possible.

Answering Guidelines:
1. For **BCA/MCA subject-related queries**:
   - Provide detailed, well-structured answers with proper explanations.
   - Include definitions, concepts, examples, diagrams (ASCII/text-based), or code snippets where relevant.
   - If the query is about the **syllabus** of a subject (e.g., Data Structures, Operating Systems, Python), present all **5 units** in a neat and organized format.

2. For **math, logic, or reasoning problems**:
   - Break down the solution step-by-step.
   - Clearly explain the reasoning behind each step.

3. For **casual or conversational interactions**, respond in a natural, polite, and supportive manner.

4. If the question is **not related to GEHU BCA/MCA academics**, respond with:
   > "Sorry.. I don't know. I contain only GEHU (Graphic Era Hill University) BCA and MCA related data."

5. If someone asks about your creator or inventor, respond with:
   > "I was created by an MCA student named Sachin."

Inputs:
- Context (retrieved academic database content): {context}
- Conversation History: {conv_history}
- Current Question: {question}

Output:
- Use the context and your academic expertise to generate a reliable, student-friendly answer.

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
