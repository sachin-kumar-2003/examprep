import { Pinecone } from "@pinecone-database/pinecone";
import { PineconeStore } from "@langchain/pinecone";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import dotenv from "dotenv";
import { readFile } from "fs/promises";

dotenv.config();

async function main() {
  const result = await readFile('./temp.txt');
  const text = result.toString();   

  const splitter = new RecursiveCharacterTextSplitter();
  const docs = await splitter.createDocuments([text]);

  console.log(`✅ Text file loaded. Split into ${docs.length} documents.`);

  const embeddings = new GoogleGenerativeAIEmbeddings({
    model: "embedding-001",
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
    controllerHostUrl: `https://controller.${process.env.PINECONE_ENVIRONMENT}.pinecone.io`,
  });

  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);

  await PineconeStore.fromDocuments(docs, embeddings, {
    pineconeIndex,
  });

  console.log("✅ Embeddings stored into Pinecone!");
}

main().catch(console.error);
