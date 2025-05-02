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
import { formatConversation } from "./utils/formatConversation.js";

// Environment variables
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const SUPABASE_URL = process.env.SUPERBASE_URL;
const SUPABASE_API_KEY = process.env.SUPERBASE_API_KEY;

// 1. Setup Embeddings and Supabase Vector Store
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
  model: "gemini-2.0-flash", // better context tracking
  apiKey: GOOGLE_API_KEY,
  maxOutputTokens: 2048,
});

// 3. Prompts
const standalonePrompt = ChatPromptTemplate.fromTemplate(
  `Given a question and the conversation history, convert it into a standalone question that includes any important context from the conversation.\n\nConversation History:\n{conv_history}\n\nFollow-up Question:\n{question}\n\nStandalone Question:`
);

const answerPrompt = ChatPromptTemplate.fromTemplate(
  `Answer the question based on the context below. If the answer is not in the context, say "Sorry.. I don't know I contain only GEHU BCA and MCA related Data..".\n\nContext:\n{context}\n\nQuestion:\n{question}\n\nAnswer:`
);

// 4. Answer Function
async function answerUserQuestion(question, conv_history) {
  try {
    const formattedHistory = formatConversation(conv_history);

    // Step 1: Reformulate into a standalone question
    const standaloneChain = standalonePrompt.pipe(llm).pipe(new StringOutputParser());
    const standaloneQuestion = await standaloneChain.invoke({
      question,
      conv_history: formattedHistory,
    });

    // Step 2: Retrieve matching documents
    const matchedDocs = await retriever.invoke(standaloneQuestion);
    console.log(`Found ${matchedDocs.length} documents.`);

    // Step 3: Combine retrieved context
    const context = await combineDocument.invoke(matchedDocs);

    // Step 4: Generate final answer
    const finalChain = answerPrompt.pipe(llm).pipe(new StringOutputParser());
    const answer = await finalChain.invoke({
      context,
      question: standaloneQuestion,
    });

    console.log("\nFinal Answer:\n", answer);
    return answer;
  } catch (err) {
    console.error("Error during question processing:", err.message);
  }
}

// 5. Run example usage
const run = async () => {
  const conversationHistory = [];

  const userQuestion1 = "Hi my name is sachin and Why was Nutsy different from his siblings?";
  const ans1 = await answerUserQuestion(userQuestion1, conversationHistory);
  conversationHistory.push({ user: userQuestion1, bot: ans1 });

  const userQuestion2 = "What is my name ?";
  const ans2 = await answerUserQuestion(userQuestion2, conversationHistory);
  conversationHistory.push({ user: userQuestion2, bot: ans2 });
};

run();
