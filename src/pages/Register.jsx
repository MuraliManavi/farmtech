import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaLeaf,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUserPlus,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaSeedling,
  FaCloudSun,
  FaChartLine,
} from "react-icons/fa";

function Register() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "farmer",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("Registration Successful");

      window.location.href = "/login";

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
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

      <div className="w-full max-w-7xl overflow-hidden rounded-[40px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,.35)]">

        <div className="grid lg:grid-cols-2 min-h-[760px]">
        {/* LEFT SIDE */}

          <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-700 p-14">

            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-green-400/20 blur-3xl"></div>

            <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

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

                    <p className="mt-2 text-green-100">

                      Smart Farming Platform

                    </p>

                  </div>

                </div>

                <h2 className="mt-16 text-6xl leading-tight font-extrabold text-white">

                  Join The

                  <br />

                  Revolution 🌱

                </h2>

                <p className="mt-8 max-w-lg text-xl leading-9 text-green-100">

                  Create your FarmTech account and start
                  buying or selling agricultural products
                  using AI-powered farming technology.

                </p>

              </div>

              <div className="space-y-6">

                <div className="flex items-center gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-lg">

                  <FaSeedling className="text-4xl text-green-300" />

                  <div>

                    <h3 className="text-xl font-bold text-white">

                      Smart Farming

                    </h3>

                    <p className="text-green-100">

                      AI recommendations for every crop

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-lg">

                  <FaCloudSun className="text-4xl text-yellow-300" />

                  <div>

                    <h3 className="text-xl font-bold text-white">

                      Weather Intelligence

                    </h3>

                    <p className="text-green-100">

                      Real-time weather forecasting

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-lg">

                  <FaChartLine className="text-4xl text-blue-300" />

                  <div>

                    <h3 className="text-xl font-bold text-white">

                      Better Profits

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

                  Create Account

                </h2>

                <p className="mt-3 text-gray-500">

                  Join the FarmTech Community

                </p>

              </div>

              <form
                onSubmit={submitHandler}
                className="mt-10 space-y-5"
              >

                {/* Name */}

                <div className="relative">

                  <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600" />

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
                    className="w-full h-14 rounded-2xl border border-green-200 pl-14 pr-4 outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* Email */}

                <div className="relative">

                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600" />

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
                    className="w-full h-14 rounded-2xl border border-green-200 pl-14 pr-4 outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* Phone */}

                <div className="relative">

                  <FaPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600" />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-2xl border border-green-200 pl-14 pr-4 outline-none focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* Password */}

                <div className="relative">

                  <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value,
                      })
                    }
                    className="w-full h-14 rounded-2xl border border-green-200 pl-14 pr-14 outline-none focus:ring-2 focus:ring-green-500"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
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

                {/* Role */}

                <select
                  value={form.role}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      role: e.target.value,
                    })
                  }
                  className="w-full h-14 rounded-2xl border border-green-200 px-4 outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="farmer">
                    👨‍🌾 Farmer
                  </option>

                  <option value="buyer">
                    🛒 Buyer
                  </option>

                </select>

                {/* Terms */}

                <label className="flex items-start gap-3 text-sm text-gray-600">

                  <input type="checkbox" className="mt-1" />

                  <span>
                    I agree to the Terms &
                    Conditions and Privacy
                    Policy.
                  </span>

                </label>

                {/* Register Button */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg shadow-xl transition hover:scale-[1.02] flex items-center justify-center gap-3"
                >

                  <FaUserPlus />

                  {loading
                    ? "Creating Account..."
                    : "Create Account"}

                </button>

                <div className="text-center pt-4">

                  <p className="text-gray-500">

                    Already have an account?

                  </p>

                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 mt-3 font-bold text-green-700 hover:text-green-800"
                  >

                    Login Now

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

export default Register;