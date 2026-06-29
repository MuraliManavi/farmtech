// Premium FloatingWhatsApp.jsx

import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  const phone = "91XXXXXXXXXX"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-6 z-50 group"
    >
      <div className="relative">

        {/* Pulse Animation */}

        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>

        {/* Button */}

        <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-700 shadow-2xl flex items-center justify-center hover:scale-110 transition duration-300">

          <FaWhatsapp className="text-white text-4xl" />

        </div>

        {/* Tooltip */}

        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition">

          <span className="font-semibold text-green-700">
            Chat with Farmer
          </span>

        </div>

      </div>
    </a>
  );
}

export default FloatingWhatsApp;