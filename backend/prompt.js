// gemini-stream.js
import { config } from "dotenv";
config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
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
const answerTemplate = `Answer the question based on the context below. If the answer is not in the context, say "I don't know".\n\nContext:\n{context}\n\nQuestion:\n{question}\n\nAnswer:`;

const answerPrompt = ChatPromptTemplate.fromTemplate(answerTemplate);


function combineDocument(docs){
  return docs.map(doc => doc.pageContent).join("\n\n");
}



const standAloneQuestion= 'given  a question convert it into a stand alone question. question: {question}';
const standAloneQuestionPrompt = ChatPromptTemplate.fromTemplate(standAloneQuestion);



const chain = standAloneQuestionPrompt.pipe(llm).pipe(new StringOutputParser()).pipe(retriever).pipe(combineDocument);
const response = await chain.invoke({ question: 'Why was Nutsy different from his siblings?' });
console.log(response); 