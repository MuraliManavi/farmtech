// Premium Newsletter.jsx

import { useState } from "react";
import {
  FaPaperPlane,
  FaLeaf,
} from "react-icons/fa";

function Newsletter() {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    alert("Subscribed Successfully!");

    setEmail("");
  };

  return (
    <section className="py-24 bg-gradient-to-r from-green-700 via-green-600 to-emerald-500">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-[40px] shadow-2xl p-12 text-center">

          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center mx-auto shadow-xl">

            <FaLeaf className="text-white text-5xl" />

          </div>

          <h2 className="text-5xl font-extrabold text-green-700 mt-8">
            Stay Updated 🌱
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Subscribe to receive farming tips, weather alerts,
            AI recommendations and marketplace updates.
          </p>

          <form
            onSubmit={submitHandler}
            className="mt-10 flex flex-col md:flex-row gap-5 justify-center"
          >

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="flex-1 border border-green-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-2xl font-bold shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition"
            >
              <FaPaperPlane />
              Subscribe
            </button>

          </form>

          <p className="text-gray-400 mt-6 text-sm">
            No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;