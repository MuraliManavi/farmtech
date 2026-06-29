// Premium FAQ.jsx

import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const faqData = [
  {
    question: "How does FarmTech work?",
    answer:
      "FarmTech connects farmers directly with buyers, eliminating middlemen and ensuring fair prices.",
  },
  {
    question: "Is FarmTech free for farmers?",
    answer:
      "Yes. Farmers can register and list their products for free.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Payments are processed securely through trusted payment gateways.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Buyers can track their orders from dispatch to delivery.",
  },
  {
    question: "Does FarmTech provide AI assistance?",
    answer:
      "Yes. Our AI Assistant helps with crop recommendations, diseases, fertilizers and farming practices.",
  },
  {
    question: "Can buyers contact farmers directly?",
    answer:
      "Yes. Buyers can communicate with verified farmers after placing an order.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-100">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
            ❓ FAQ
          </span>

          <h2 className="text-5xl font-extrabold text-green-800 mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Everything you need to know about FarmTech.
          </p>

        </div>

        <div className="space-y-5">

          {faqData.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(
                    open === index
                      ? null
                      : index
                  )
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <h3 className="text-xl font-bold text-gray-800">
                  {item.question}
                </h3>

                {open === index ? (
                  <FaChevronUp className="text-green-700" />
                ) : (
                  <FaChevronDown className="text-green-700" />
                )}

              </button>

              {open === index && (

                <div className="px-6 pb-6">

                  <p className="text-gray-600 leading-8">
                    {item.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;