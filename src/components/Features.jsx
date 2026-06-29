// Premium Features.jsx

import {
  FaRobot,
  FaCloudSun,
  FaChartLine,
  FaLeaf,
  FaTractor,
  FaShoppingBasket,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Organic Products",
      desc: "Fresh organic vegetables, fruits and grains directly from farmers.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <FaRobot />,
      title: "AI Farming",
      desc: "AI-powered crop recommendations and disease detection.",
      color: "from-emerald-500 to-green-700",
    },
    {
      icon: <FaCloudSun />,
      title: "Weather Forecast",
      desc: "Real-time weather updates for better farming decisions.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <FaChartLine />,
      title: "Market Prices",
      desc: "Live crop prices and market demand insights.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaShoppingBasket />,
      title: "Marketplace",
      desc: "Buy and sell farm products without middlemen.",
      color: "from-lime-500 to-green-700",
    },
    {
      icon: <FaTractor />,
      title: "Modern Agriculture",
      desc: "Smart farming tools and digital agriculture solutions.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Platform",
      desc: "Safe payments and verified farmer profiles.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Nearby Farmers",
      desc: "Find nearby farmers and local fresh produce instantly.",
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            🌿 Features
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-green-800">
            Everything Farmers Need
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            FarmTech combines AI, weather intelligence,
            direct marketplace, and smart agriculture
            into one powerful platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-green-100"
            >

              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-4xl shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6 text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;