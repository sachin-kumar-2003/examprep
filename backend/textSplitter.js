import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { readFile } from 'fs/promises';

async function main() {
  try {

    const result = await readFile('./temp.txt', 'utf-8');
    console.log("Text file loaded.");

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
    });
    const docs = await splitter.createDocuments([result]);
    console.log(`Split into ${docs.length} documents.`);
    const embeddings = new GoogleGenerativeAIEmbeddings({
      model: "embedding-001", 
      apiKey: process.env.GOOGLE_API_KEY, 
    });

     const vectors = await Promise.all(
      docs.map(doc => embeddings.embedQuery(doc.pageContent))
    );

    console.log("Embeddings generated:");
    console.log(vectors);

  } catch (error) {
    console.error(error);
  }
}

main();
