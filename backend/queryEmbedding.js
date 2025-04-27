// queryEmbeddings.js

import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { PineconeStore } from "@langchain/pinecone";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const userQuery = "Explain the benefits of colorful socks."; // 🔥 <-- your search query

  // 1. Initialize Embedding model
  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "embedding-001",
    apiKey: process.env.GOOGLE_API_KEY,
  });

  // 2. Connect to Pinecone
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });

  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME);

  // 3. Load the vector store
  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex: index,
  });

  // 4. Perform similarity search
  const results = await vectorStore.similaritySearch(userQuery, 3); // top 3 results

  console.log("🔍 Search Results:");
  results.forEach((doc, idx) => {
    console.log(`Result ${idx + 1}:`);
    console.log(doc.pageContent);
    console.log("-------------------------------");
  });
}

main().catch((err) => {
  console.error("❌ Error:", err);
});
