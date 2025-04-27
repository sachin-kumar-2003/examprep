import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import dotenv from "dotenv";
import { readFile } from "fs/promises";
dotenv.config();

async function main(){
  const file= await readFile("./temp.txt");
  const text = file.toString();
  console.log(text);
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});


