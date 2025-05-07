// for query rewriting
import { config } from "dotenv";
config({ path: "backend/.env" });

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const googleApiKey=process.env.GOOGLE_API_KEY;

//llm setup
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: googleApiKey,
  temperature: 0.5,
  maxOutputTokens: 1024,
});


const rewritePrompt = PromptTemplate.fromTemplate(`
Perform query expansion. If there are multiple common ways of phrasing a user question
or common synonyms for key words in the question, make sure to return multiple versions
of the query with the different phrasings.

If there are acronyms or words you are not familiar with, do not try to rephrase them.

Return 5 different versions of the question
Original Query: "{query}"
Rewritten Query:
`);
// exam
let originalQuery = `What is the weather?`;
await rewriteQuery(originalQuery).then((result) => {
  console.log("DEBUG: Rewritten query output:", result);
});
// function 
export async function rewriteQuery(originalQuery) {
  try {
    const chain = rewritePrompt.pipe(llm).pipe(new StringOutputParser());
    const rewritten = await chain.invoke({ query: originalQuery });
    console.log("DEBUG: rewriteQuery result =", rewritten);
    return rewritten.trim();
  } catch (error) {
    console.error("query rewriting message =", error.message);
    return originalQuery;
  }
}
