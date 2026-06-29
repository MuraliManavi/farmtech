import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaLeaf,
  FaStar,
  FaFilter,
  FaMapMarkerAlt,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        "https://farmtech-s0md.onrender.com/api/products"
      );

      setProducts(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const categories = useMemo(() => {

    const list = [
      "All",
      ...new Set(
        products
          .map((item) => item.category)
          .filter(Boolean)
      ),
    ];

    return list;

  }, [products]);

  const filteredProducts = products.filter((item) => {

    const matchSearch =
      item.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      item.category === category;

    return matchSearch && matchCategory;

  });

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Hero */}

      <section
        className="relative h-[420px] overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

            <span className="inline-flex bg-green-500/20 border border-green-300/20 backdrop-blur-lg rounded-full px-6 py-3 text-white">

              🌱 Farm Fresh Marketplace

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white">

              Buy Direct

              <span className="block text-green-400">

                From Farmers

              </span>

            </h1>

            <p className="mt-6 text-xl text-gray-200 max-w-2xl leading-9">

              Fresh vegetables, fruits, grains and organic
              products delivered directly from verified farmers.

            </p>

          </div>

        </div>

      </section>

      {/* Search */}

      <section className="relative -mt-14 z-20 pb-10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="bg-white rounded-[30px] shadow-2xl border border-green-100 p-6">

            <div className="grid lg:grid-cols-4 gap-5">

              {/* Search */}

              <div className="lg:col-span-2 flex items-center rounded-2xl border border-gray-200 px-5">

                <FaSearch className="text-green-600 text-xl" />

                <input
                  type="text"
                  placeholder="Search fresh products..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="w-full px-4 py-4 outline-none"
                />

              </div>

              {/* Category */}

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="rounded-2xl border border-gray-200 px-5 py-4 outline-none"
              >

                {categories.map((cat) => (

                  <option
                    key={cat}
                    value={cat}
                  >
                    {cat}
                  </option>

                ))}

              </select>

              <button className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 text-white font-bold flex items-center justify-center gap-3">

                <FaFilter />

                Filter Products

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Products */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">

        {/* Loading */}

        {loading ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {[...Array(8)].map((_, index) => (

              <div
                key={index}
                className="h-[500px] rounded-[35px] bg-white animate-pulse shadow-xl"
              />

            ))}

          </div>

        ) : filteredProducts.length === 0 ? (

          <div className="bg-white rounded-[35px] shadow-xl p-20 text-center">

            <FaSearch className="mx-auto text-6xl text-green-600 mb-8" />

            <h2 className="text-4xl font-bold">

              No Products Found

            </h2>

            <p className="mt-5 text-gray-500">

              Try another search keyword.

            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredProducts.map((item) => (

              <div
                key={item._id}
                className="group overflow-hidden rounded-[35px] border border-green-100 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={
                      item.image ||
                      "https://via.placeholder.com/500"
                    }
                    alt={item.name}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Organic */}

                  <span className="absolute left-5 top-5 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                    🌿 Organic

                  </span>

                  {/* Wishlist */}

                  <button className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-red-500 hover:text-white">

                    <FaHeart />

                  </button>

                  {/* Verified */}

                  <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-lg">

                    <FaShieldAlt className="mr-2 inline" />

                    Verified

                  </span>

                </div>

                {/* Content */}

                <div className="p-7">

                  <div className="flex items-start justify-between">

                    <div>

                      <h2 className="text-2xl font-bold">

                        {item.name}

                      </h2>

                      <p className="mt-2 text-gray-500">

                        {item.category}

                      </p>

                    </div>

                    <div className="text-yellow-500">

                      ⭐4.9

                    </div>

                  </div>

                  <div className="mt-6 flex items-center gap-2 text-gray-500">

                    <FaMapMarkerAlt />

                    Andhra Pradesh

                  </div>

                  <div className="mt-3 flex items-center gap-2 text-gray-500">

                    <FaTruck />

                    Free Delivery

                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    <div>

                      <h2 className="text-4xl font-extrabold text-green-700">

                        ₹{item.price}

                      </h2>

                      <span className="text-gray-500">

                        {item.quantity} Kg

                      </span>

                    </div>

                    <div className="flex text-yellow-500">

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />

                    </div>

                  </div>

                  {/* Buttons */}

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <button className="rounded-2xl border-2 border-green-600 py-3 font-bold text-green-700 transition hover:bg-green-50">

                      View

                    </button>

                    <button className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-green-700 py-3 font-bold text-white transition hover:from-green-700 hover:to-green-800">

                      <FaShoppingCart />

                      Buy

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>
      {/* Marketplace Statistics */}

      <section className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-lg">

              🌱 Trusted Across India

            </span>

            <h2 className="mt-8 text-5xl font-extrabold text-white">

              Why Farmers & Buyers Choose FarmTech

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-green-100">

              A secure marketplace connecting verified farmers
              directly with customers through technology.

            </p>

          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg">

              <h2 className="text-5xl font-extrabold text-white">

                500+

              </h2>

              <p className="mt-3 text-green-100">

                Verified Farmers

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg">

              <h2 className="text-5xl font-extrabold text-white">

                2,000+

              </h2>

              <p className="mt-3 text-green-100">

                Fresh Products

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg">

              <h2 className="text-5xl font-extrabold text-white">

                10K+

              </h2>

              <p className="mt-3 text-green-100">

                Happy Customers

              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg">

              <h2 className="text-5xl font-extrabold text-white">

                100%

              </h2>

              <p className="mt-3 text-green-100">

                Secure Payments

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="rounded-[40px] bg-gradient-to-r from-green-600 to-green-700 p-12 lg:p-20 text-center shadow-2xl">

            <h2 className="text-5xl font-extrabold text-white">

              Ready to Buy Fresh Farm Products?

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-green-100">

              Join thousands of buyers purchasing directly
              from verified farmers across India.

            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <button className="rounded-2xl bg-white px-10 py-4 font-bold text-green-700 transition hover:scale-105">

                Start Shopping

              </button>

              <button className="rounded-2xl border-2 border-white px-10 py-4 font-bold text-white transition hover:bg-white hover:text-green-700">

                Become a Farmer

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Marketplace;