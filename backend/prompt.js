// gemini-memory.js
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

// Setup embeddings and vector store
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

// Gemini LLM
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-pro-latest",
  apiKey: GOOGLE_API_KEY,
  maxOutputTokens: 2048,
});

// Prompt Template (includes chat history and context)
const answerPrompt = ChatPromptTemplate.fromTemplate(
`You are a helpful assistant with access to BCA/MCA-related knowledge and the current conversation.

Use both the **context** (knowledge base) and the **conversation history** to answer the user's question.

If you don't know the answer based on either, say:
"Sorry.. I don't know. I contain only GEHU BCA and MCA related Data."

Context:
{context}

Conversation History:
{conv_history}

Current Question:
{question}

Answer:`
);



// Main function
async function answerUserQuestion(userQuestion, chatHistory) {
  try {
    const formattedHistory = formatConversation(chatHistory);

    // Retrieve context
    const relevantDocs = await retriever.invoke(userQuestion);
    const context = await combineDocument.invoke(relevantDocs);

    // Build chain
    const chain = answerPrompt.pipe(llm).pipe(new StringOutputParser());

    // Get answer
    const answer = await chain.invoke({
      context,
      conv_history: formattedHistory,
      question: userQuestion,
    });

    console.log("Answer:", answer);
    return answer;
  } catch (err) {
    console.error("Error:", err.message);
  }
}

// Example usage
const run = async () => {
  const history = [];

  const q1 = "Hi, my name is Sachin. Why was Nutsy different from his siblings?";
  const a1 = await answerUserQuestion(q1, history);
  history.push({ user: q1, bot: a1 });

};

run();
