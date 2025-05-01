// gemini-stream.js
import { config } from "dotenv";
config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { combineDocument } from "./utils/combineDocument.js";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const SUPABASE_URL = process.env.SUPERBASE_URL;
const SUPABASE_API_KEY = process.env.SUPERBASE_API_KEY;

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "embedding-001",
  apiKey: GOOGLE_API_KEY,
});

const client = createClient(SUPABASE_URL, SUPABASE_API_KEY);

const vectorStore = new SupabaseVectorStore(embeddings, {
  client: client,
  tableName: "documents",
  queryName: "match_documents",
});

const retriever = vectorStore.asRetriever();

// 2. LLM Instance
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: GOOGLE_API_KEY,
  maxOutputTokens: 2048,
});

// 3. Prompts
const standalonePrompt = ChatPromptTemplate.fromTemplate(
  "Given a question, convert it into a standalone question.\n\nQuestion: {question}"
);

const answerPrompt = ChatPromptTemplate.fromTemplate(
  `Answer the question based on the context below. If the answer is not in the context, say "I don't know i have only knowledge of GEHU IT related syllabus related information. ".\n\nContext:\n{context}\n\nQuestion:\n{question}\n\nAnswer:`
);

// 4. Answer Function
async function answerUserQuestion(userInput) {
  try {
    const standaloneChain = standalonePrompt.pipe(llm).pipe(new StringOutputParser());
    const standaloneQuestion = await standaloneChain.invoke({ question: userInput });
    console.log("Standalone Question:", standaloneQuestion);

    const matchedDocs = await retriever.invoke(standaloneQuestion);
    console.log(`Found ${matchedDocs.length} documents.`);

    const context = await combineDocument.invoke(matchedDocs);

    const finalChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());
    const answer = await finalChain.invoke({
      context,
      question: standaloneQuestion,
    });

    console.log("\nAnswer \n", answer);
  } catch (err) {
    console.error("Error during question processing:", err.message);
  }
}

// Example usage:
const userQuestion = "What is time ?";
await answerUserQuestion(userQuestion);
