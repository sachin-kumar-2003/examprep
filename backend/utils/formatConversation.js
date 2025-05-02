// utils/formatConversation.js
export function formatConversation(history) {
  return history
    .map((msg) => `User: ${msg.user}\nAI: ${msg.bot}`)
    .join("\n");
}
