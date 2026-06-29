// Premium CTA.jsx

import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLeaf,
} from "react-icons/fa";

function CTA() {
  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900/75"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center mx-auto">

          <FaLeaf className="text-5xl" />

        </div>

        <h2 className="text-6xl font-extrabold mt-8">
          Join the Future of Farming
        </h2>

        <p className="text-xl text-green-100 mt-6 max-w-3xl mx-auto leading-9">
          FarmTech empowers farmers with AI, weather intelligence,
          direct marketplace access, and smart agriculture tools.
          Start your digital farming journey today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

          <Link
            to="/register"
            className="bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Get Started
            <FaArrowRight />
          </Link>

          <Link
            to="/marketplace"
            className="border-2 border-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300"
          >
            Explore Marketplace
          </Link>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-5xl font-extrabold">
              500+
            </h3>

            <p className="mt-3 text-green-100">
              Farmers
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-5xl font-extrabold">
              2K+
            </h3>

            <p className="mt-3 text-green-100">
              Products
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-5xl font-extrabold">
              10K+
            </h3>

            <p className="mt-3 text-green-100">
              Orders
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8">

            <h3 className="text-5xl font-extrabold">
              100%
            </h3>

            <p className="mt-3 text-green-100">
              Organic
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;