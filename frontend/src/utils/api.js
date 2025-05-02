const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/chat";

export const sendMessageToBackend = async (question, conversationHistory) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, conversationHistory }),
  });

  const data = await res.json();
  return data.answer;
};
