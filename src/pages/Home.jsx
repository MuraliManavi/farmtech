import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaUsers,
  FaRobot,
  FaChartLine,
  FaShoppingCart,
  FaArrowRight,
  FaPlay,
  FaShieldAlt,
  FaSeedling,
} from "react-icons/fa";

import StatsSection from "../components/StatsSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import CTA from "../components/CTA";

function Home() {
  const products = [
    {
      id: 1,
      name: "Organic Rice",
      price: 65,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200",
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=1200",
    },
    {
      id: 3,
      name: "Fresh Potatoes",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=1200",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* HERO */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/farm-tech.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 via-black/30 to-transparent"></div>

        {/* Hero Content */}

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">

              <FaLeaf className="text-green-400" />

              <span className="text-white font-medium">

                India's Smart Farming Ecosystem

              </span>

            </div>

            <h1 className="mt-10 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight">

              Empowering

              <span className="block text-green-400">

                Every Farmer

              </span>

            </h1>

            <p className="mt-8 text-lg lg:text-xl text-gray-200 leading-9 max-w-2xl">

              Buy and sell agricultural products directly,
              receive AI-powered farming advice, weather
              forecasts and modern digital agriculture tools
              — all in one platform.

            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-12">

              <Link
                to="/register"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition duration-300"
              >

                Get Started

                <FaArrowRight />

              </Link>

              <Link
                to="/marketplace"
                className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white hover:text-green-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition duration-300"
              >

                <FaPlay />

                Explore Marketplace

              </Link>

            </div>

            {/* Highlights */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">

                <FaUsers className="mx-auto text-green-400 text-3xl mb-3" />

                <h3 className="text-2xl font-bold text-white">
                  500+
                </h3>

                <p className="text-green-100 text-sm">
                  Farmers
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">

                <FaShoppingCart className="mx-auto text-green-400 text-3xl mb-3" />

                <h3 className="text-2xl font-bold text-white">
                  2000+
                </h3>

                <p className="text-green-100 text-sm">
                  Products
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">

                <FaShieldAlt className="mx-auto text-green-400 text-3xl mb-3" />

                <h3 className="text-2xl font-bold text-white">
                  100%
                </h3>

                <p className="text-green-100 text-sm">
                  Secure
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-center">

                <FaSeedling className="mx-auto text-green-400 text-3xl mb-3" />

                <h3 className="text-2xl font-bold text-white">
                  AI
                </h3>

                <p className="text-green-100 text-sm">
                  Powered
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* PREMIUM STATS */}

      <section className="relative -mt-20 z-20 pb-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="rounded-[40px] bg-white shadow-2xl border border-green-100 p-8 lg:p-12">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="text-center group">

                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                  <FaUsers className="text-white text-4xl" />

                </div>

                <h2 className="mt-6 text-5xl font-extrabold text-green-700">
                  500+
                </h2>

                <p className="mt-2 text-gray-500">
                  Registered Farmers
                </p>

              </div>

              <div className="text-center group">

                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                  <FaShoppingCart className="text-white text-4xl" />

                </div>

                <h2 className="mt-6 text-5xl font-extrabold text-green-700">
                  2,000+
                </h2>

                <p className="mt-2 text-gray-500">
                  Products
                </p>

              </div>

              <div className="text-center group">

                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                  <FaChartLine className="text-white text-4xl" />

                </div>

                <h2 className="mt-6 text-5xl font-extrabold text-green-700">
                  100+
                </h2>

                <p className="mt-2 text-gray-500">
                  Villages
                </p>

              </div>

              <div className="text-center group">

                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                  <FaLeaf className="text-white text-4xl" />

                </div>

                <h2 className="mt-6 text-5xl font-extrabold text-green-700">
                  10K+
                </h2>

                <p className="mt-2 text-gray-500">
                  Orders Delivered
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}

      <section className="py-28 bg-gradient-to-b from-green-50 via-white to-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-4xl mx-auto">

            <span className="inline-flex px-6 py-3 rounded-full bg-green-100 text-green-700 font-semibold">

              🌱 Trusted Smart Agriculture Platform

            </span>

            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">

              Building the Future of Agriculture

            </h2>

            <p className="mt-8 text-xl leading-9 text-gray-600">

              FarmTech combines Artificial Intelligence,
              modern farming techniques, weather insights,
              and a direct marketplace into one digital
              ecosystem for Indian farmers.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20">
          {/* Card 1 */}

            <div className="group bg-white rounded-[35px] border border-green-100 shadow-xl p-10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">

                <FaLeaf className="text-white text-4xl" />

              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">

                Organic Farming

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Encourage sustainable agriculture by helping
                farmers grow healthier crops using eco-friendly
                farming methods.

              </p>

              <ul className="mt-8 space-y-3 text-gray-600">

                <li>✔ Chemical Free Farming</li>

                <li>✔ Better Crop Yield</li>

                <li>✔ Healthy Soil Management</li>

                <li>✔ Sustainable Agriculture</li>

              </ul>

            </div>

            {/* Card 2 */}

            <div className="group bg-white rounded-[35px] border border-green-100 shadow-xl p-10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">

                <FaRobot className="text-white text-4xl" />

              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">

                AI Powered

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Artificial Intelligence helps farmers with crop
                recommendations, fertilizer guidance,
                disease prediction and smart agriculture.

              </p>

              <ul className="mt-8 space-y-3 text-gray-600">

                <li>✔ AI Crop Suggestions</li>

                <li>✔ Disease Detection</li>

                <li>✔ Fertilizer Advice</li>

                <li>✔ Smart Farming Tips</li>

              </ul>

            </div>

            {/* Card 3 */}

            <div className="group bg-white rounded-[35px] border border-green-100 shadow-xl p-10 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center">

                <FaShoppingCart className="text-white text-4xl" />

              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">

                Direct Marketplace

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Farmers can directly sell fresh produce to
                buyers without intermediaries, ensuring
                fair pricing and higher profits.

              </p>

              <ul className="mt-8 space-y-3 text-gray-600">

                <li>✔ Direct Farmer Sales</li>

                <li>✔ Better Pricing</li>

                <li>✔ Secure Transactions</li>

                <li>✔ Faster Delivery</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Existing Components */}

      <StatsSection />

      <Features />
      {/* PREMIUM FEATURED PRODUCTS */}

      <section className="py-28 bg-gradient-to-b from-white via-green-50 to-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Heading */}

          <div className="text-center max-w-4xl mx-auto">

            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold">

              🛒 Fresh Marketplace

            </span>

            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">

              Fresh Products From Verified Farmers

            </h2>

            <p className="mt-8 text-xl text-gray-600 leading-9">

              Shop fresh vegetables, grains, fruits and organic
              products directly from trusted farmers across India.

            </p>

          </div>

          {/* Product Grid */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

            {products.map((product) => (

              <div
                key={product.id}
                className="group bg-white rounded-[35px] overflow-hidden border border-green-100 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >

                {/* Product Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Organic Badge */}

                  <span className="absolute top-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">

                    🌿 Organic

                  </span>

                  {/* Wishlist */}

                  <button className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-red-500 hover:text-white transition flex items-center justify-center">

                    ❤️

                  </button>

                  {/* Discount */}

                  <span className="absolute bottom-5 left-5 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow">

                    20% OFF

                  </span>

                </div>

                {/* Product Info */}

                <div className="p-8">

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="text-3xl font-bold text-gray-900">

                        {product.name}

                      </h3>

                      <p className="text-green-600 mt-2">

                        📍 Andhra Pradesh

                      </p>

                    </div>

                    <div className="text-yellow-500 font-bold">

                      ⭐ 4.9

                    </div>

                  </div>

                  <p className="mt-5 text-gray-600 leading-7">

                    Freshly harvested premium quality farm
                    products delivered directly from verified
                    farmers.

                  </p>

                  <div className="flex justify-between items-center mt-8">

                    <div>

                      <h2 className="text-4xl font-extrabold text-green-700">

                        ₹{product.price}

                      </h2>

                      <span className="text-gray-500">

                        per kg

                      </span>

                    </div>

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">

                      In Stock

                    </span>

                  </div>

                  {/* Features */}

                  <div className="grid grid-cols-2 gap-3 mt-8 text-sm">

                    <div className="bg-green-50 rounded-xl p-3 text-center">

                      🚚 Fast Delivery

                    </div>

                    <div className="bg-green-50 rounded-xl p-3 text-center">

                      ✔ Verified Farmer

                    </div>

                    <div className="bg-green-50 rounded-xl p-3 text-center">

                      🌱 Organic

                    </div>

                    <div className="bg-green-50 rounded-xl p-3 text-center">

                      ⭐ Premium

                    </div>

                  </div>

                  {/* Buttons */}

                  <div className="grid grid-cols-2 gap-4 mt-8">

                    <button className="rounded-2xl border-2 border-green-600 py-4 font-bold text-green-700 hover:bg-green-50 transition">

                      👁 Quick View

                    </button>

                    <button className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 text-white py-4 font-bold hover:from-green-700 hover:to-green-800 transition">

                      🛒 Add To Cart

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Explore Marketplace */}

          <div className="mt-20 flex justify-center">

            <Link
              to="/marketplace"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-10 py-5 text-lg font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:from-green-700 hover:to-green-800"
            >
              Explore Marketplace

              <FaArrowRight />
            </Link>

          </div>

        </div>

      </section>

      {/* AI ASSISTANT */}

      <section className="relative overflow-hidden py-28 bg-gradient-to-r from-green-900 via-green-800 to-green-700">

        {/* Background Decoration */}

        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-green-400/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Side */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-white backdrop-blur-lg">

                🤖 AI Farming Assistant

              </span>

              <h2 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                <span className="block">Your Personal</span>
                <span className="block text-green-300">Agriculture Expert</span>
              </h2>

              <p className="mt-8 text-xl leading-9 text-green-100">

                Ask farming questions anytime and receive
                AI-powered guidance for crop selection,
                fertilizers, disease identification,
                irrigation and harvesting.

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4 text-white">

                  ✅ Crop Recommendation

                </div>

                <div className="flex items-center gap-4 text-white">

                  ✅ Disease Detection

                </div>

                <div className="flex items-center gap-4 text-white">

                  ✅ Fertilizer Suggestions

                </div>

                <div className="flex items-center gap-4 text-white">

                  ✅ Weather Advice

                </div>

                <div className="flex items-center gap-4 text-white">

                  ✅ 24 × 7 AI Support

                </div>

              </div>

              <Link
                to="/assistant"
                className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
              >

                Talk To AI

                <FaArrowRight />

              </Link>

            </div>

            {/* Right Side */}

            <div className="relative">

              <div className="rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/20 p-10 shadow-2xl">

                <div className="flex justify-center">

                  <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-2xl">

                    <FaRobot className="text-6xl text-green-700 animate-pulse" />

                  </div>

                </div>

                <h3 className="mt-10 text-center text-3xl font-bold text-white">

                  FarmTech AI Assistant

                </h3>

                <p className="mt-6 text-center text-green-100 leading-8">

                  Ask anything about farming, crops,
                  fertilizers, weather, irrigation,
                  diseases and market prices.

                </p>

                <div className="mt-10 space-y-4">

                  <div className="rounded-2xl bg-white/10 p-5 text-white">

                    🌾 Which crop is suitable for black soil?

                  </div>

                  <div className="rounded-2xl bg-green-500 p-5 text-white ml-10">

                    AI: Cotton, Groundnut and Soybean are
                    excellent choices for black soil.

                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 text-white">

                    🌦 Will it rain tomorrow?

                  </div>

                  <div className="rounded-2xl bg-green-500 p-5 text-white ml-10">

                    AI: Rain is expected tomorrow evening.
                    Delay fertilizer spraying.

                  </div>

                </div>

                <Link
                  to="/assistant"
                  className="mt-10 w-full flex justify-center items-center gap-3 rounded-2xl bg-white py-4 font-bold text-green-700 hover:scale-105 transition"
                >

                  Open AI Assistant

                  <FaArrowRight />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Additional Sections */}

      <Testimonials />

      <FAQ />

      <Newsletter />

      <CTA />

    </div>

  );
}

export default Home;