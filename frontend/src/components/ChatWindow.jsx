import { useState } from "react";
import HeroHeader from "./HeroHeader";
import { FiSend } from "react-icons/fi"; // Feather Icons


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/chat";

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
  
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
  
    // Convert to history array: [{ user: ..., bot: ... }, ...]
    const formattedHistory = [];
    for (let i = 0; i < updatedMessages.length - 1; i += 2) {
      if (
        updatedMessages[i].role === "user" &&
        updatedMessages[i + 1]?.role === "bot"
      ) {
        formattedHistory.push({
          user: updatedMessages[i].content,
          bot: updatedMessages[i + 1].content,
        });
      }
    }
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: formattedHistory,
        }),
      });
  
      const data = await response.json();
      setMessages([...updatedMessages, { role: "bot", content: data.answer }]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { role: "bot", content: "Error: Unable to get a response from the server." },
      ]);
    }
  
    setLoading(false);
  };
  

  return (
    <div className="w-full max-w-2xl mx-auto p-4 min-h-screen bg-gray-100 flex flex-col justify-evenly">
      <h1 className="text-2xl font-bold mb-4 text-center">Exam Prep AI</h1>
      {messages.length === 0 && (
        <div className="text-center text-gray-500 mb-4">
          <HeroHeader />
        </div>
      )}
      <div className="space-y-3 overflow-y-auto max-h-[60vh] mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.role === "user" ? "bg-blue-200 self-start" : "bg-green-200 self-end ml-auto"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-gray-500">Thinking...</div>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg"
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-6 py-4 rounded-lg"
        >
          {/* use the send icon using react icons */}
          <FiSend className="text-white text-xl" />
         
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
