import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { readFile } from 'fs/promises';

async function main() {
  try {
    const result = await readFile('./temp.txt', 'utf-8'); 
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
      separators: ['\n\n', '\n', ' ', ''],
    });
    const docs = await splitter.createDocuments([result]);
    console.log(docs);

  } catch (error) {
    console.error(error); 
  }
}

main();
