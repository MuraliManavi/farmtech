// Premium About.jsx

import {
  FaLeaf,
  FaSeedling,
  FaUsers,
  FaGlobeAsia,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Hero */}

      <section
        className="h-[450px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800')",
        }}
      >

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white">

          <FaLeaf className="mx-auto text-8xl" />

          <h1 className="text-6xl font-extrabold mt-6">
            About FarmTech
          </h1>

          <p className="text-xl mt-5 max-w-3xl mx-auto">
            Revolutionizing agriculture through technology,
            AI and direct farmer-to-customer connectivity.
          </p>

        </div>

      </section>

      {/* Mission */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <h2 className="text-5xl font-bold text-green-700">
              Our Mission
            </h2>

            <p className="mt-8 text-gray-600 leading-9 text-lg">

              FarmTech empowers farmers by providing
              direct market access, AI-powered crop
              recommendations, weather forecasting,
              smart agriculture tools and transparent
              pricing.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white rounded-3xl p-8 shadow-lg">

                <FaBullseye className="text-5xl text-green-600" />

                <h3 className="text-2xl font-bold mt-5">
                  Vision
                </h3>

                <p className="text-gray-500 mt-3">
                  Smarter Farming
                </p>

              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">

                <FaHandshake className="text-5xl text-green-600" />

                <h3 className="text-2xl font-bold mt-5">
                  Trust
                </h3>

                <p className="text-gray-500 mt-3">
                  Fair Marketplace
                </p>

              </div>

            </div>

          </div>

          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900"
            alt=""
            className="rounded-[35px] shadow-2xl h-full object-cover"
          />

        </div>

      </section>

      {/* Features */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-green-700 mb-16">

            Why Choose FarmTech?

          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

              <FaSeedling className="text-5xl text-green-600" />

              <h3 className="text-2xl font-bold mt-5">
                Sustainable Farming
              </h3>

            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

              <FaUsers className="text-5xl text-blue-500" />

              <h3 className="text-2xl font-bold mt-5">
                Farmer Community
              </h3>

            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

              <FaGlobeAsia className="text-5xl text-orange-500" />

              <h3 className="text-2xl font-bold mt-5">
                Nationwide Reach
              </h3>

            </div>

            <div className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">

              <FaLeaf className="text-5xl text-green-700" />

              <h3 className="text-2xl font-bold mt-5">
                Organic Products
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-700">
                500+
              </h2>

              <p className="mt-3 text-gray-500">
                Farmers
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-700">
                2000+
              </h2>

              <p className="mt-3 text-gray-500">
                Products
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-700">
                100+
              </h2>

              <p className="mt-3 text-gray-500">
                Villages
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

              <h2 className="text-5xl font-bold text-green-700">
                10K+
              </h2>

              <p className="mt-3 text-gray-500">
                Orders
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;