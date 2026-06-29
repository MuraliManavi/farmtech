import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">

      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-emerald-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Company */}

          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">

                <FaLeaf className="text-green-700 text-3xl" />

              </div>

              <div>

                <h2 className="text-3xl font-extrabold">
                  FarmTech
                </h2>

                <p className="text-green-200 text-sm">
                  Smart Farming Platform
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-green-100">

              FarmTech connects farmers directly with buyers,
              helping them increase profits through technology,
              AI assistance and transparent digital agriculture.

            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-green-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white text-green-700 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link
                to="/"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <FaArrowRight className="text-sm" />
                Home
              </Link>

              <Link
                to="/marketplace"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <FaArrowRight className="text-sm" />
                Marketplace
              </Link>

              <Link
                to="/weather"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <FaArrowRight className="text-sm" />
                Weather
              </Link>

              <Link
                to="/assistant"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <FaArrowRight className="text-sm" />
                AI Assistant
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center gap-3 hover:text-yellow-300 transition"
              >
                <FaArrowRight className="text-sm" />
                Dashboard
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <FaPhoneAlt className="mt-1 text-green-300" />

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex items-start gap-4">

                <FaEnvelope className="mt-1 text-green-300" />

                <span>support@farmtech.com</span>

              </div>

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt className="mt-1 text-green-300" />

                <span>
                  India
                  <br />
                  Smart Agriculture Network
                </span>

              </div>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-2xl font-bold mb-8">
              Stay Connected
            </h3>

            <p className="text-green-100 leading-8 mb-6">

              Subscribe to receive farming tips, weather
              updates, government schemes and marketplace
              offers.

            </p>

            <div className="space-y-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 text-white placeholder:text-green-200 outline-none focus:border-green-300"
              />

              <button className="w-full rounded-2xl bg-white text-green-700 py-4 font-bold hover:bg-green-100 transition-all duration-300">

                Subscribe

              </button>

            </div>

            {/* Community Card */}

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

              <h4 className="text-xl font-bold">

                🌱 Join Our Community

              </h4>

              <p className="mt-3 text-green-100 leading-7">

                Thousands of farmers and buyers are already
                using FarmTech to improve agriculture with
                technology.

              </p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>

        {/* Bottom Footer */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          <p className="text-center lg:text-left text-green-200">

            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">
              FarmTech
            </span>
            . All Rights Reserved.

          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-green-200">

            <Link
              to="/about"
              className="hover:text-white transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>

            <Link
              to="/privacy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;