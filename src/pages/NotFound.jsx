// Premium NotFound.jsx

import { Link } from "react-router-dom";
import { FaLeaf, FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl p-12 text-center max-w-xl">

        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center shadow-xl">

          <FaLeaf className="text-white text-6xl" />

        </div>

        <h1 className="text-8xl font-extrabold text-green-700 mt-8">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-5 leading-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition"
        >
          <FaHome />
          Back to Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;