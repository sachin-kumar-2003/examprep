
function combineDocument(docs){
  return docs.map(doc => doc.pageContent).join("\n\n");
}

export { combineDocument };