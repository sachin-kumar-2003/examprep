// utils/formatConversation.js
export function formatConversation(history) {
  return history
    .map((turn, i) => `User: ${turn.user}\nBot: ${turn.bot}`)
    .join("\n");
}
