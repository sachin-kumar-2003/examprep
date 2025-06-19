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
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: GOOGLE_API_KEY,
  temperature: 0.5,
  maxOutputTokens: 2048,
});
const answerPrompt = ChatPromptTemplate.fromTemplate(
  `You are a highly intelligent and helpful academic assistant developed specifically for students of GEHU (Graphic Era Hill University) pursuing BCA or MCA. Your core responsibility is to deliver **accurate, complete, and well-structured answers** based on the university syllabus, official materials, and verified academic sources.

Instructions:
- First, rely on the *Context* (university database content).
- If the Context lacks information or is incomplete, use your own verified academic knowledge to fill in the gaps without mentioning this explicitly.
- Always deliver final answers that are complete, coherent, and helpful—even when the input context is limited or partially missing.

Answering Guidelines:

1. For **BCA/MCA subject-related queries**:
   - Provide detailed and clear answers with definitions, explanations, examples, diagrams (ASCII/text-based), and code snippets when needed.
   - If the user asks for the **syllabus** of a subject (e.g., Operating Systems, Python, CN), provide all **5 units** in a well-structured format.

2. For **math, logic, or reasoning tasks**:
   - Solve step-by-step with clear explanations and logical breakdowns.

3. For **casual or conversational queries**, respond politely, naturally, and helpfully.

4. If the question is **outside the GEHU BCA/MCA academic scope**, respond with:
   > "Sorry.. I don't know. I contain only GEHU (Graphic Era Hill University) BCA and MCA related data."

5. If someone asks who created you, respond with:
   > "I was created by an MCA student named Sachin."

Inputs:
- Context (retrieved academic database content): {context}
- Conversation History: {conv_history}
- Current Question: {question}

Output:
- Provide a final, verified, and student-friendly answer by combining database content and academic expertise when necessary.

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
