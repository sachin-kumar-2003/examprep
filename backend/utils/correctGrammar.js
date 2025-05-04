// correctGrammar.js
import { config } from "dotenv";
config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

// LLM setup
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: process.env.GOOGLE_API_KEY,
  temperature: 0.5,
  maxOutputTokens: 1024,
});

// Prompt template
const grammarPrompt = PromptTemplate.fromTemplate(
  `Correct the grammar of the following text without changing its meaning:\n\n"{text}"\n\nCorrected Version:`
);

// Function to correct grammar
export async function correctGrammar(text) {
  try {
    const chain = grammarPrompt.pipe(llm).pipe(new StringOutputParser());
    const corrected = await chain.invoke({ text });
    return corrected;
  } catch (err) {
    console.error("Grammar correction error:", err);
    return text; // fallback: return original if error
  }
}
await correctGrammar("heyyy myy naame iss sachiin.").then(console.log); // Example usage
