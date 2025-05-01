import { config } from "dotenv";
config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { readFile } from "fs/promises";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

async function generateStory(topic) {
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    maxOutputTokens: 2048,
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const prompt = `Generate a story about ${topic}.`;

  const res = await model.invoke([
    { role: "user", content: prompt }
  ]);

  return res.text;
}

async function embedAndStore() {
  try {
    // file reading
    const file = await readFile("./temp.txt");
    const text = file.toString();

    // making chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      separators: ["\n\n", "\n", " ", "##"],
      chunkOverlap: 50,
    });
    const chunks = await textSplitter.splitText(text);

    // convert chunks into documents
    const docs = chunks.map(chunk => ({
      pageContent: chunk,
      metadata: {},
    }));

    // Initialize embeddings model
    const embeddings = new GoogleGenerativeAIEmbeddings({
      model: "embedding-001",
      apiKey: process.env.GOOGLE_API_KEY,
    });

    // KEYS 
    const sbiApiKey = process.env.SUPERBASE_API_KEY;
    const sbiUrl = process.env.SUPERBASE_URL;

    const client = createClient(sbiUrl, sbiApiKey);

    const vectorStore = new SupabaseVectorStore(embeddings, {
      client: client,
      tableName: "documents",
      queryName: "match_documents",
    });

    // Store the docs (not plain chunks) in Supabase
    await vectorStore.addDocuments(docs);
    console.log("Documents embedded and stored successfully.");
  } catch (error) {
    console.error("Error embedding and storing documents:", error);
  }
}

async function main() {
  try {
    
    // Call the new embedding and storing function
    await embedAndStore();
  } catch (error) {
    console.error(error);
  }
}

main().catch(console.error);
