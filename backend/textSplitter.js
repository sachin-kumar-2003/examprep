import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { readFile } from 'fs/promises';

try {
  const result=await readFile('./temp.txt', 'utf-8');
  const text=await result.text()
  const splitter=new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const docs = await splitter.createDocuments([text]);
  console.log(docs);

} catch (error) {
  
}