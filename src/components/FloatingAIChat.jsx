// Premium FloatingAIChat.jsx

import { useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

function FloatingAIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    alert("Connect this button with your AI API.");

    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-44 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 shadow-2xl flex items-center justify-center hover:scale-110 transition"
      >
        {open ? (
          <FaTimes className="text-white text-2xl" />
        ) : (
          <FaRobot className="text-white text-3xl" />
        )}
      </button>

      {/* Chat Window */}

      {open && (

        <div className="fixed bottom-64 right-6 w-[360px] bg-white rounded-[30px] shadow-2xl overflow-hidden z-50">

          {/* Header */}

          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-5 flex items-center gap-3">

            <FaRobot className="text-3xl" />

            <div>

              <h2 className="font-bold text-xl">
                FarmTech AI
              </h2>

              <p className="text-green-100 text-sm">
                Online
              </p>

            </div>

          </div>

          {/* Messages */}

          <div className="h-80 overflow-y-auto p-5 bg-green-50">

            <div className="bg-white rounded-2xl p-4 shadow">

              👋 Hello! I'm FarmTech AI.

              <br />
              <br />

              Ask me about:

              <br />

              🌾 Crops

              <br />

              🌦 Weather

              <br />

              🐛 Plant Diseases

              <br />

              💰 Market Prices

              <br />

              🌱 Fertilizers

            </div>

          </div>

          {/* Input */}

          <div className="border-t p-4 flex gap-3">

            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                sendMessage()
              }
              placeholder="Ask AI..."
              className="flex-1 border border-green-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={sendMessage}
              className="bg-green-600 hover:bg-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center"
            >
              <FaPaperPlane />
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default FloatingAIChat;