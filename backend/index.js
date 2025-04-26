import { config } from "dotenv";
config();
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

async function main() {
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    maxOutputTokens: 2048,
    apiKey:process.env.GOOGLE_API_KEY, 
  });

  const res = await model.invoke([
    { role: "user", content: "What would be a good company name for a company that makes colorful socks?" }
  ]);

  console.log(res.text);
}

main().catch(console.error);
