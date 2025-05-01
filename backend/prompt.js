// gemini-stream.js
import { config } from "dotenv";
config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
// document.addEventListener('click', function (event) {
//   event.preventDefault();
//   run();
// });

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "embedding-001",
  apiKey: process.env.GOOGLE_API_KEY,
});

const sbiApiKey = process.env.SUPERBASE_API_KEY;
const sbiUrl = process.env.SUPERBASE_URL;
const client = createClient(sbiUrl, sbiApiKey);



const vectorStore = new SupabaseVectorStore(embeddings, {
  client: client,
  tableName: "documents",
  queryName: "match_documents",
});

const retriever = vectorStore.asRetriever();

// const googleApiKey = process.env.GOOGLE_API_KEY;
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  maxOutputTokens: 2048,
  apiKey: process.env.GOOGLE_API_KEY,
});


const standAloneQuestion= 'given  a question convert it into a stand alone question. question: {question}';
const standAloneQuestionPrompt = ChatPromptTemplate.fromTemplate(standAloneQuestion);
const standAloneQuestionChain = standAloneQuestionPrompt.pipe(llm).pipe(retriever);
const response = await standAloneQuestionChain.invoke({ question: 'Why was Nutsy different from his siblings?' });
console.log(response.text);