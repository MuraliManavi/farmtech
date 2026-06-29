import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaEnvelope,
  FaLock,
  FaSignInAlt,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaSeedling,
  FaCloudSun,
  FaChartLine,
} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,25,10,.65),rgba(10,25,10,.75)),url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=2000')",
      }}
    >
      <div className="w-full max-w-7xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,.35)]">

        <div className="grid lg:grid-cols-2 min-h-[720px]">
          {/* LEFT SIDE */}

          <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 p-14">

            {/* Background Blur */}

            <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col justify-between h-full">

              <div>

                <div className="flex items-center gap-4">

                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">

                    <FaLeaf className="text-green-700 text-4xl" />

                  </div>

                  <div>

                    <h1 className="text-5xl font-extrabold text-white">

                      FarmTech

                    </h1>

                    <p className="text-green-100 mt-2">

                      Smart Agriculture Platform

                    </p>

                  </div>

                </div>

                <h2 className="mt-16 text-6xl leading-tight font-extrabold text-white">

                  Welcome

                  <br />

                  Back 👋

                </h2>

                <p className="mt-8 text-xl leading-9 text-green-100 max-w-lg">

                  Connect with buyers, manage your products,
                  monitor sales and grow your farming business
                  using modern technology.

                </p>

              </div>

              <div className="space-y-6">

                <div className="flex items-center gap-5 bg-white/10 backdrop-blur-lg rounded-3xl p-6">

                  <FaSeedling className="text-4xl text-green-300" />

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      Smart Farming

                    </h3>

                    <p className="text-green-100">

                      AI powered agriculture assistance

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 bg-white/10 backdrop-blur-lg rounded-3xl p-6">

                  <FaCloudSun className="text-4xl text-yellow-300" />

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      Live Weather

                    </h3>

                    <p className="text-green-100">

                      Accurate forecasts for farmers

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 bg-white/10 backdrop-blur-lg rounded-3xl p-6">

                  <FaChartLine className="text-4xl text-blue-300" />

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      Marketplace

                    </h3>

                    <p className="text-green-100">

                      Sell directly to buyers

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
          {/* RIGHT SIDE */}

          <div className="bg-white flex items-center justify-center p-8 lg:p-14">

            <div className="w-full max-w-md">

              <div className="text-center">

                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center mx-auto shadow-xl">

                  <FaLeaf className="text-white text-5xl" />

                </div>

                <h2 className="mt-8 text-4xl font-extrabold text-gray-800">

                  Sign In

                </h2>

                <p className="mt-3 text-gray-500">

                  Login to continue your farming journey

                </p>

              </div>

              <form
                onSubmit={submitHandler}
                className="mt-10 space-y-6"
              >

                {/* Email */}

                <div className="relative">

                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600 text-lg" />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="w-full h-14 rounded-2xl border border-green-200 pl-14 pr-5 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />

                </div>

                {/* Password */}

                <div className="relative">

                  <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600 text-lg" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    className="w-full h-14 rounded-2xl border border-green-200 pl-14 pr-14 outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700"
                  >

                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}

                  </button>

                </div>

                {/* Options */}

                <div className="flex justify-between items-center text-sm">

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="checkbox"
                    />

                    Remember me

                  </label>

                  <Link
                    to="#"
                    className="text-green-700 hover:underline font-semibold"
                  >

                    Forgot Password?

                  </Link>

                </div>

                {/* Button */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-[1.02] transition"
                >

                  <FaSignInAlt />

                  {loading
                    ? "Signing In..."
                    : "Login"}

                </button>

                <div className="text-center pt-4">

                  <p className="text-gray-500">

                    Don't have an account?

                  </p>

                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 mt-3 font-bold text-green-700 hover:text-green-800"
                  >

                    Create Account

                    <FaArrowRight />

                  </Link>

                </div>

              </form>

            </div>

          </div>
          </div>

      </div>

    </div>
  );
}

export default Login;