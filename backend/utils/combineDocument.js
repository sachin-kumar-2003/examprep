// utils/combineDocument.js
export const combineDocument = {
  async invoke(documents) {
    return documents.map(doc => doc.pageContent).join("\n---\n");
  },
};
