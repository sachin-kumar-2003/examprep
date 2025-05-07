import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import HeroHeader from "./HeroHeader.jsx";
import { FiSend } from "react-icons/fi";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/chat";

const ChatWindow = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

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

      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          content: data.answer || "No response from server.",
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        { role: "bot", content: "Error: Could not reach server." },
      ]);
    }

    setLoading(false);
  };

  return (
    
      <div className="flex h-full w-full items-center justify-center bg-white px-2 sm:px-4 font-sans">
        <div className="flex flex-col w-full max-w-3xl h-full bg-white rounded-xl shadow-xl overflow-hidden backdrop-blur-md bg-opacity-90">
          
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 text-sm scrollbar-thin scrollbar-thumb-gray-400">
            {messages.length === 0 && <HeroHeader />}
  
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`whitespace-pre-wrap p-3 sm:p-4 rounded-xl leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-[#E6E6FA] to-[#D8BFD8] text-gray-800 self-end ml-auto border border-[#9370DB]"
                    : "bg-gray-200 text-gray-700 self-start border border-gray-300"
                }`}
                style={{ maxWidth: "85%", wordWrap: "break-word" }}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ))}
  
            {loading && (
              <div className="text-[#9370DB] italic animate-pulse">
                Thinking...
              </div>
            )}
  
            <div ref={messagesEndRef} />
          </div>
  
          <div className="bg-white p-3 sm:p-4 border-t border-gray-300 flex items-center gap-2 sm:gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-gray-100 text-gray-800 placeholder-[#9370DB] px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9370DB] transition-all text-sm sm:text-base"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-[#9370DB] hover:bg-[#7A5F9A] text-white p-3 rounded-lg transition transform hover:scale-105 disabled:opacity-50"
            >
              <FiSend className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
  );
};

export default ChatWindow;
