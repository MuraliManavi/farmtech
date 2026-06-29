// Premium Contact.jsx

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLeaf,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Hero */}

      <section
        className="relative h-[420px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800')",
        }}
      >

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative text-center text-white">

          <FaLeaf className="mx-auto text-7xl" />

          <h1 className="text-6xl font-extrabold mt-6">
            Contact FarmTech
          </h1>

          <p className="text-xl mt-5">
            We'd love to hear from you 🌱
          </p>

        </div>

      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}

          <div className="bg-white rounded-[35px] shadow-2xl p-10">

            <h2 className="text-4xl font-bold text-green-700 mb-8">
              Send Message
            </h2>

            <form
              onSubmit={submitHandler}
              className="space-y-6"
            >

              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full border border-green-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full border border-green-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.target.value,
                  })
                }
                className="w-full border border-green-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full border border-green-200 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl shadow-xl font-bold flex items-center gap-3 hover:scale-105 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="bg-white rounded-[35px] shadow-xl p-8">

              <FaPhoneAlt className="text-5xl text-green-700" />

              <h3 className="text-3xl font-bold mt-5">
                Phone
              </h3>

              <p className="text-gray-600 mt-3">
                +91 XXXXX XXXXX
              </p>

            </div>

            <div className="bg-white rounded-[35px] shadow-xl p-8">

              <FaEnvelope className="text-5xl text-green-700" />

              <h3 className="text-3xl font-bold mt-5">
                Email
              </h3>

              <p className="text-gray-600 mt-3">
                support@farmtech.com
              </p>

            </div>

            <div className="bg-white rounded-[35px] shadow-xl p-8">

              <FaMapMarkerAlt className="text-5xl text-green-700" />

              <h3 className="text-3xl font-bold mt-5">
                Address
              </h3>

              <p className="text-gray-600 mt-3">
                Andhra Pradesh, India
              </p>

            </div>

            <div className="rounded-[35px] overflow-hidden shadow-2xl">

              <iframe
                title="FarmTech Location"
                src="https://www.google.com/maps?q=Andhra%20Pradesh&output=embed"
                className="w-full h-[300px] border-0"
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;