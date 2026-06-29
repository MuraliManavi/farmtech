// Premium Testimonials.jsx

import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Organic Farmer",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "FarmTech helped me sell directly to customers and increased my income by 40%.",
  },
  {
    name: "Priya Sharma",
    role: "Buyer",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Fresh vegetables delivered directly from farmers. Excellent quality and reasonable prices.",
  },
  {
    name: "Anil Reddy",
    role: "Farmer",
    image:
      "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "The AI assistant and weather forecast are extremely useful for crop planning.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            ⭐ Testimonials
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-green-800">
            Farmers Love FarmTech
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Trusted by farmers and buyers across India.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[35px] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all border border-green-100"
            >

              <FaQuoteLeft className="text-green-600 text-4xl" />

              <p className="mt-6 text-gray-600 leading-8">
                {item.review}
              </p>

              <div className="flex text-yellow-500 mt-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;