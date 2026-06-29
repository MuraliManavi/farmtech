import { useState } from "react";
import axios from "axios";

import {
  FaRobot,
  FaPaperPlane,
  FaMicrophone,
  FaImage,
  FaTrash,
  FaSeedling,
  FaCloudSun,
  FaChartLine,
  FaSpinner,
} from "react-icons/fa";

function AIAssistant() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([
    {
      role: "assistant",
      text:
        "👋 Welcome to FarmTech AI.\n\nAsk me about crops, fertilizers, crop diseases, irrigation, pesticides, weather, market prices and modern farming.",
    },
  ]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    const newChat = [
      ...chat,
      {
        role: "user",
        text: userMessage,
      },
    ];

    setChat(newChat);
    setMessage("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://farmtech-s0md.onrender.com/api/ai/ask",
        {
          question: userMessage,
        }
      );

      setChat([
        ...newChat,
        {
          role: "assistant",
          text:
            data.answer ||
            "No response received from AI.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setChat([
        ...newChat,
        {
          role: "assistant",
          text:
            error.response?.data?.message ||
            "⚠️ AI service is currently unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">

    {/* HERO */}

    <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-green-800 to-emerald-700 py-20">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600')] bg-cover bg-center opacity-10"></div>

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"></div>

      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-2xl">

            <FaRobot className="text-6xl text-green-700" />

          </div>

          <h1 className="mt-8 text-6xl font-extrabold text-white">

            FarmTech AI

          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-green-100">

            AI powered farming assistant for crops,
            fertilizers, weather, pest control,
            irrigation and market prices.

          </p>

        </div>

      </div>

    </section>

    {/* MAIN */}

    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid lg:grid-cols-4 gap-8">

        {/* SIDEBAR */}

        <div className="lg:col-span-1">

          <div className="sticky top-28 rounded-[35px] bg-white p-8 shadow-2xl border border-green-100">

            <div className="flex items-center gap-4">

              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">

                <FaRobot className="text-white text-3xl" />

              </div>

              <div>

                <h2 className="text-2xl font-bold">

                  AI Assistant

                </h2>

                <p className="text-green-600">

                  🟢 Online

                </p>

              </div>

            </div>

            <div className="mt-10 space-y-5">

              <div className="rounded-2xl bg-green-50 p-5">

                <div className="flex items-center gap-3">

                  <FaSeedling className="text-3xl text-green-600" />

                  <div>

                    <h3 className="font-bold">

                      Crop Advice

                    </h3>

                    <p className="text-sm text-gray-500">

                      AI crop recommendations

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl bg-blue-50 p-5">

                <div className="flex items-center gap-3">

                  <FaCloudSun className="text-3xl text-blue-500" />

                  <div>

                    <h3 className="font-bold">

                      Weather

                    </h3>

                    <p className="text-sm text-gray-500">

                      Smart weather guidance

                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl bg-yellow-50 p-5">

                <div className="flex items-center gap-3">

                  <FaChartLine className="text-3xl text-yellow-500" />

                  <div>

                    <h3 className="font-bold">

                      Market Prices

                    </h3>

                    <p className="text-sm text-gray-500">

                      Latest crop prices

                    </p>

                  </div>

                </div>

              </div>

            </div>

            <h3 className="mt-10 mb-4 text-lg font-bold">

              Suggested Questions

            </h3>

            <div className="space-y-3">

              <button
                onClick={() =>
                  setMessage("Best crop for black soil?")
                }
                className="w-full rounded-xl border border-green-200 p-3 text-left hover:bg-green-50"
              >
                🌾 Best crop for black soil
              </button>

              <button
                onClick={() =>
                  setMessage("Natural pest control methods")
                }
                className="w-full rounded-xl border border-green-200 p-3 text-left hover:bg-green-50"
              >
                🐛 Natural pest control
              </button>

              <button
                onClick={() =>
                  setMessage("Best fertilizer for tomatoes")
                }
                className="w-full rounded-xl border border-green-200 p-3 text-left hover:bg-green-50"
              >
                🌱 Best fertilizer
              </button>

              <button
                onClick={() =>
                  setChat([
                    {
                      role: "assistant",
                      text:
                        "👋 Chat cleared. Ask me anything about farming.",
                    },
                  ])
                }
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 text-white font-semibold hover:bg-red-600"
              >
                <FaTrash />

                Clear Chat

              </button>

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}

<div className="lg:col-span-3">

  <div className="overflow-hidden rounded-[35px] border border-green-100 bg-white shadow-2xl">

    {/* Header */}

    <div className="flex items-center justify-between bg-gradient-to-r from-green-700 to-green-600 p-6 text-white">

      <div className="flex items-center gap-4">

        <FaRobot className="text-3xl" />

        <div>

          <h2 className="text-2xl font-bold">
            FarmTech AI Chat
          </h2>

          <p className="text-green-100">
            Powered by Google Gemini
          </p>

        </div>

      </div>

      <div className="rounded-full bg-white/20 px-4 py-2 text-sm">
        🟢 Online
      </div>

    </div>

    {/* Chat */}

    <div className="h-[550px] overflow-y-auto bg-gradient-to-b from-green-50 to-white p-8">

      <div className="space-y-6">

        {chat.map((item, index) => (

          <div
            key={index}
            className={`flex ${
              item.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[80%] rounded-3xl px-6 py-4 shadow-lg whitespace-pre-line ${
                item.role === "user"
                  ? "bg-gradient-to-r from-green-600 to-green-700 text-white"
                  : "bg-white border border-green-100 text-gray-700"
              }`}
            >
              {item.text}
            </div>

          </div>

        ))}

        {loading && (

          <div className="flex justify-start">

            <div className="flex items-center gap-3 rounded-3xl bg-white border border-green-100 px-6 py-4 shadow-lg">

              <FaSpinner className="animate-spin text-green-600" />

              <span className="font-medium">

                FarmTech AI is thinking...

              </span>

            </div>

          </div>

        )}

      </div>

    </div>

    {/* Bottom */}

    <div className="border-t bg-white p-6">

      <div className="mb-5 flex flex-wrap gap-3">

        <button
          onClick={() =>
            setMessage("Suggest the best crop for this season.")
          }
          className="rounded-full bg-green-100 px-4 py-2 text-green-700 hover:bg-green-200"
        >
          🌾 Crop Suggestion
        </button>

        <button
          onClick={() =>
            setMessage("Best fertilizer for tomatoes?")
          }
          className="rounded-full bg-green-100 px-4 py-2 text-green-700 hover:bg-green-200"
        >
          🌱 Fertilizer
        </button>

        <button
          onClick={() =>
            setMessage("Today's farming weather advice")
          }
          className="rounded-full bg-green-100 px-4 py-2 text-green-700 hover:bg-green-200"
        >
          🌦 Weather
        </button>

        <button
          onClick={() =>
            setMessage("Latest market price of rice")
          }
          className="rounded-full bg-green-100 px-4 py-2 text-green-700 hover:bg-green-200"
        >
          📈 Market Price
        </button>

      </div>

      <div className="flex items-center gap-4">

        <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-200 hover:bg-green-50">

          <FaMicrophone className="text-green-700" />

        </button>

        <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-200 hover:bg-green-50">

          <FaImage className="text-green-700" />

        </button>

        <input
          type="text"
          placeholder="Ask anything about farming..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && sendMessage()
          }
          className="h-14 flex-1 rounded-2xl border border-green-200 px-5 outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="flex h-14 items-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-8 font-bold text-white shadow-xl hover:scale-105 disabled:opacity-70"
        >

          {loading ? (

            <>
              <FaSpinner className="animate-spin" />
              Thinking...
            </>

          ) : (

            <>
              <FaPaperPlane />
              Send
            </>

          )}

        </button>

      </div>

    </div>

  </div>

</div>

</div>

</section>

</div>
);

}

export default AIAssistant;