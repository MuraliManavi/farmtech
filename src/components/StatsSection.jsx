// Premium StatsSection.jsx

import {
  FaLeaf,
  FaUsers,
  FaShoppingBasket,
  FaRupeeSign,
} from "react-icons/fa";

function StatsSection() {
  const stats = [
    {
      icon: <FaLeaf />,
      value: "500+",
      title: "Farmers",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <FaShoppingBasket />,
      value: "2,000+",
      title: "Products",
      color: "from-emerald-500 to-green-700",
    },
    {
      icon: <FaUsers />,
      value: "10,000+",
      title: "Customers",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <FaRupeeSign />,
      value: "₹25L+",
      title: "Revenue",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            📊 Our Growth
          </span>

          <h2 className="text-5xl font-extrabold text-green-800 mt-6">
            Trusted Across India
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Thousands of farmers and buyers use FarmTech every day.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-white to-green-50 rounded-[35px] shadow-xl border border-green-100 p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 text-center"
            >

              <div
                className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-5xl shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-extrabold text-green-700 mt-8">
                {item.value}
              </h3>

              <p className="text-gray-500 text-lg mt-3">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;