import {
  FaLeaf,
  FaShoppingCart,
  FaUser,
  FaBell,
  FaBars,
  FaMicroscope,
} from "react-icons/fa";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const navStyle = ({ isActive }) =>
    `relative font-semibold transition-all duration-300
     ${
       isActive
         ? "text-green-700 after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[3px] after:bg-green-600"
         : "text-gray-700 hover:text-green-700"
     }`;

  return (
    <>
      {/* Top Announcement */}

      <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex items-center justify-between text-xs md:text-sm">

          <p className="truncate">
            🌱 Smart Farming • Fresh Produce • Direct Farmer Marketplace
          </p>

          <p className="hidden md:block">
            🚚 Free Delivery Across India
          </p>

        </div>

      </div>

      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-green-100 shadow-lg">

        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center shadow-lg">

                <FaLeaf className="text-white text-2xl lg:text-3xl" />

              </div>

              <div>

                <h1 className="text-2xl lg:text-3xl font-extrabold text-green-800">
                  FarmTech
                </h1>

                <p className="hidden sm:block text-xs text-gray-500">
                  Smart Farming Platform
                </p>

              </div>

            </Link>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-10">

              <NavLink to="/" className={navStyle}>
                Home
              </NavLink>

              <NavLink
                to="/marketplace"
                className={navStyle}
              >
                Marketplace
              </NavLink>

              <NavLink
                to="/weather"
                className={navStyle}
              >
                Weather
              </NavLink>

              <NavLink
                to="/disease-detection"
                className={navStyle}
              >
              Disease Detection
              </NavLink>

              <NavLink
                to="/assistant"
                className={navStyle}
              >
                AI Assistant
              </NavLink>

              <NavLink
                to="/dashboard"
                className={navStyle}
              >
                Dashboard
              </NavLink>

            </div>
            {/* Right Side */}

            <div className="hidden lg:flex items-center gap-4">

              {/* Notification */}

              <button className="relative w-11 h-11 rounded-full bg-green-50 hover:bg-green-100 transition flex items-center justify-center">

                <FaBell className="text-green-700 text-lg" />

                <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>

              </button>

              {/* Cart */}

              <Link
                to="/cart"
                className="relative w-11 h-11 rounded-full bg-green-50 hover:bg-green-100 transition flex items-center justify-center"
              >

                <FaShoppingCart className="text-green-700 text-lg" />

                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>

              </Link>

              {/* User */}

              {user ? (

                <Link
                  to="/dashboard"
                  className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition flex items-center gap-3"
                >

                  <FaUser />

                  <span>{user.name}</span>

                </Link>

              ) : (

                <Link
                  to="/login"
                  className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-7 py-3 rounded-2xl shadow-lg hover:scale-105 transition flex items-center gap-3"
                >

                  <FaUser />

                  Login

                </Link>

              )}

            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-11 h-11 rounded-xl bg-green-100 hover:bg-green-200 transition flex items-center justify-center"
            >

              {menuOpen ? (
                <FaTimes className="text-green-700 text-xl" />
              ) : (
                <FaBars className="text-green-700 text-xl" />
              )}

            </button>

          </div>

        </div>

        {/* Mobile Drawer */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >

          <div className="bg-white border-t border-green-100 shadow-xl px-6 py-6 space-y-5">

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={navStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/marketplace"
              onClick={() => setMenuOpen(false)}
              className={navStyle}
            >
              Marketplace
            </NavLink>

            <NavLink
              to="/weather"
              onClick={() => setMenuOpen(false)}
              className={navStyle}
            >
              Weather
            </NavLink>

            <NavLink
              to="/assistant"
              onClick={() => setMenuOpen(false)}
              className={navStyle}
            >
              AI Assistant
            </NavLink>

            <NavLink
              to="/disease-detection"
              className={navStyle}
            >
            Disease Detection
            </NavLink>

            <NavLink
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className={navStyle}
            >
              Dashboard
            </NavLink>

            <Link
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-xl bg-green-50 py-3 text-center font-semibold text-green-700 hover:bg-green-100 transition"
            >
              🛒 Shopping Cart
            </Link>

            {user ? (

              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 text-center font-semibold text-white"
              >
                {user.name}
              </Link>

            ) : (

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-3 text-center font-semibold text-white"
              >
                Login / Register
              </Link>

            )}

          </div>

        </div>

      </nav>

    </>
  );
}

export default Navbar;