// ===============================
// Dashboard.jsx (PART 1)
// Replace everything from imports
// up to BEFORE return(...)
// ===============================

import { useState, useEffect } from "react";
import axios from "axios";

import {
  FaLeaf,
  FaBoxOpen,
  FaRupeeSign,
  FaUsers,
  FaEdit,
  FaTrash,
  FaPlus,
  FaCloudUploadAlt,
} from "react-icons/fa";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://farmtech-s0md.onrender.com/api/products"
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadHandler = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();

    formData.append("image", file);

    try {
      setUploading(true);

      const { data } = await axios.post(
        "https://farmtech-s0md.onrender.com/api/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setProduct((prev) => ({
        ...prev,
        image: data.imageUrl,
      }));

      alert("Image Uploaded");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Upload Failed"
      );
    } finally {
      setUploading(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await axios.put(
          `https://farmtech-s0md.onrender.com/api/products/${editingId}`,
          product
        );

        alert("Product Updated");

        setEditingId(null);
      } else {
        await axios.post(
          "https://farmtech-s0md.onrender.com/api/products",
          {
            ...product,
            farmer: user._id,
          }
        );

        alert("Product Added");
      }

      setProduct({
        name: "",
        category: "",
        price: "",
        quantity: "",
        description: "",
        image: "",
      });

      fetchProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message
      );
    }
  };

  const editProduct = (item) => {
    setEditingId(item._id);

    setProduct({
      name: item.name,
      category: item.category,
      price: item.price,
      quantity: item.quantity,
      description: item.description,
      image: item.image || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteProduct = async (id) => {
    if (
      !window.confirm(
        "Delete this product?"
      )
    )
      return;

    try {
      await axios.delete(
        `https://farmtech-s0md.onrender.com/api/products/${id}`
      );

      fetchProducts();

      alert("Deleted Successfully");
    } catch (error) {
      alert("Delete Failed");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Please Login First
      </div>
    );
  };

  return (
    <div
      className="min-h-screen py-10 px-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(248,250,252,.95),rgba(240,253,244,.96)),url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800')",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 rounded-[35px] shadow-2xl p-10 text-white mb-10 flex flex-col lg:flex-row justify-between items-center">

          <div>

            <span className="bg-white/20 backdrop-blur-lg px-5 py-2 rounded-full">
              🌾 Smart Farming Platform
            </span>

            <h1 className="text-5xl font-extrabold mt-6">
              Welcome, {user.name}
            </h1>

            <p className="text-green-100 mt-5 text-lg max-w-2xl">
              Manage your products,
              monitor your business and
              sell directly to buyers.
            </p>

          </div>

          <button
            onClick={logoutHandler}
            className="mt-8 lg:mt-0 bg-white text-green-700 font-bold px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            🚪 Logout
          </button>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition">

            <FaBoxOpen className="text-5xl text-green-600" />

            <h2 className="text-4xl font-bold mt-5">
              {products.length}
            </h2>

            <p className="text-gray-500 mt-2">
              Products
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition">

            <FaUsers className="text-5xl text-blue-500" />

            <h2 className="text-4xl font-bold mt-5">
              120
            </h2>

            <p className="text-gray-500 mt-2">
              Customers
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition">

            <FaRupeeSign className="text-5xl text-yellow-500" />

            <h2 className="text-4xl font-bold mt-5">
              ₹25K
            </h2>

            <p className="text-gray-500 mt-2">
              Revenue
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition">

            <FaLeaf className="text-5xl text-green-500" />

            <h2 className="text-4xl font-bold mt-5">
              100%
            </h2>

            <p className="text-gray-500 mt-2">
              Organic
            </p>

          </div>

        </div>

        {/* ADD PRODUCT */}

        <div className="bg-white rounded-[35px] shadow-2xl border border-green-100 p-10 mb-12">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-4xl font-bold text-green-700">
                {editingId
                  ? "✏️ Edit Product"
                  : "➕ Add New Product"}
              </h2>

              <p className="text-gray-500 mt-2">
                Upload your fresh farm products.
              </p>

            </div>

          </div>

          <form onSubmit={submitHandler}>

            <div className="grid lg:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="🌾 Product Name"
                value={product.name}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-green-200 p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                placeholder="📦 Category"
                value={product.category}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    category: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-green-200 p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="number"
                placeholder="💰 Price"
                value={product.price}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    price: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-green-200 p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="number"
                placeholder="📦 Quantity"
                value={product.quantity}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    quantity: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-green-200 p-4 outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>

            <div className="mt-8">

              <label className="block mb-3 text-lg font-semibold text-gray-700">
                Product Image
              </label>

              <div className="border-2 border-dashed border-green-300 rounded-3xl p-10 text-center bg-green-50 hover:bg-green-100 transition">

                <FaCloudUploadAlt className="mx-auto text-6xl text-green-600 mb-4" />

                <p className="text-gray-600 mb-5">
                  Click below to upload image
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadHandler}
                  className="w-full"
                />

              </div>

              {uploading && (

                <div className="mt-5 text-green-600 font-semibold">
                  Uploading image...
                </div>

              )}

              {product.image && (

                <img
                  src={product.image}
                  alt="Preview"
                  className="mt-8 w-full lg:w-96 h-64 object-cover rounded-3xl shadow-xl"
                />

              )}

            </div>

            <textarea
              rows="5"
              placeholder="📝 Product Description"
              value={product.description}
              onChange={(e) =>
                setProduct({
                  ...product,
                  description: e.target.value,
                })
              }
              className="w-full mt-8 rounded-2xl border border-green-200 p-5 outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="mt-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition flex items-center gap-3"
            >
              <FaPlus />

              {editingId
                ? "Update Product"
                : "Add Product"}

            </button>

          </form>

        </div>

        {/* PRODUCT LIST */}

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-4xl font-bold text-green-700">
            🌾 My Products
          </h2>

          <div className="bg-green-600 text-white px-5 py-3 rounded-full font-semibold shadow-lg">
            {products.length} Products
          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {products.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-green-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="relative overflow-hidden">

                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/500"
                  }
                  alt={item.name}
                  className="h-64 w-full object-cover hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🌿 Organic
                </span>

                <span className="absolute top-4 right-4 bg-white text-green-700 px-3 py-2 rounded-full shadow font-bold">
                  ₹{item.price}
                </span>

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800">
                  {item.name}
                </h2>

                <p className="mt-2 text-green-700 font-semibold">
                  📦 {item.category}
                </p>

                <p className="mt-2 text-gray-600">
                  Quantity :
                  <span className="font-bold text-black">
                    {" "}
                    {item.quantity}
                  </span>
                </p>

                <p className="mt-4 text-gray-500 leading-7 line-clamp-3">
                  {item.description ||
                    "Fresh organic farm product directly from the farmer."}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <div className="text-yellow-500 text-lg">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <div className="font-bold text-green-700 text-2xl">
                    ₹{item.price}
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">

                  <button
                    onClick={() => editProduct(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl flex justify-center items-center gap-2 font-semibold transition"
                  >
                    <FaEdit />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(item._id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl flex justify-center items-center gap-2 font-semibold transition"
                  >
                    <FaTrash />
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

          </div>

      </div>

      {/* FOOTER */}

      <footer className="mt-16">

        <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 rounded-[35px] p-10 shadow-2xl">

          <div className="grid md:grid-cols-3 gap-10 text-white">

            <div>

              <h2 className="text-3xl font-bold mb-4">
                🌾 FarmTech
              </h2>

              <p className="text-green-100 leading-8">
                Connecting farmers directly with buyers through
                technology, transparency and sustainable agriculture.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Dashboard
              </h3>

              <ul className="space-y-3 text-green-100">

                <li>📦 Manage Products</li>

                <li>📊 Sales Analytics</li>

                <li>🛒 Orders</li>

                <li>⭐ Customer Reviews</li>

              </ul>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">
                Quick Stats
              </h3>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Total Products</span>
                  <span>{products.length}</span>
                </div>

                <div className="flex justify-between">
                  <span>Customers</span>
                  <span>120</span>
                </div>

                <div className="flex justify-between">
                  <span>Revenue</span>
                  <span>₹25K</span>
                </div>

              </div>

            </div>

          </div>

          <div className="border-t border-green-500 mt-10 pt-6 text-center text-green-100">

            © {new Date().getFullYear()} FarmTech • Empowering Farmers with Technology 🌱

          </div>

        </div>

      </footer>

    </div>

  );
}

export default Dashboard;