// rewriteQuery.js
import { config } from "dotenv";
config();

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

//llm setup
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: process.env.GOOGLE_API_KEY,
  temperature: 0.5,
  maxOutputTokens: 1024,
});


const rewritePrompt = PromptTemplate.fromTemplate(`
You are a smart assistant that rewrites vague or short queries into clear, detailed, and complete questions.

Original Query: "{query}"
Rewritten Query:
`);
let originalQuery = `What is the weather?`;
await rewriteQuery(originalQuery).then(console.log); // Example usage
// Function to rewrite the query
export async function rewriteQuery(originalQuery) {
  try {
    const chain = rewritePrompt.pipe(llm).pipe(new StringOutputParser());
    const rewritten = await chain.invoke({ query: originalQuery });
    return rewritten.trim();
  } catch (error) {
    console.error("Query rewrite error:", error.message);
    return originalQuery;
  }
}
