import { useState } from "react";
import axios from "axios";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/ai/ask",
        {
          question,
        }
      );

      setAnswer(data.answer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        🤖 AI Crop Assistant
      </h1>

      <textarea
        className="border p-4 w-full rounded-lg"
        rows="5"
        placeholder="Ask farming question..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
      />

      <button
        onClick={askAI}
        className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4"
      >
        Ask AI
      </button>

      {answer && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h2 className="font-bold mb-2">
            AI Answer
          </h2>

          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default AIAssistant;