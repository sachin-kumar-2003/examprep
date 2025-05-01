export function formatConversation(conversation) {
  const formattedConversation = conversation.map((message) => {
    const role = message.role === "user" ? "User" : "Assistant";
    return `${role}: ${message.content}`;
  });

  return formattedConversation.join("\n");
}