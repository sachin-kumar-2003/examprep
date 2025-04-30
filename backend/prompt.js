// gemini-stream.js
import 'dotenv/config'; 
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

document.addEventListener('click', function (event) {
  event.preventDefault();
  run();
});

const googleApiKey = process.env.GOOGLE_API_KEY;
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  maxOutputTokens: 2048,
  apiKey: googleApiKey,
});


const standAloneQuestion= 'given  a question convert it into a stand alone question. question: {question}';
const standAloneQuestionPrompt = ChatPromptTemplate.fromTemplate(standAloneQuestion);
const standAloneQuestionChain = standAloneQuestionPrompt.pipe(llm);
const response = await standAloneQuestionChain.invoke({ question: "What is the capital of France?" });


console.log(response.text);