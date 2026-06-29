// Premium ProductDetails.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  FaLeaf,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaPhone,
  FaMapMarkerAlt,
  FaUserCircle,
} from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );

      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen text-3xl font-bold">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Product Image */}

          <div className="bg-white rounded-[35px] overflow-hidden shadow-2xl">

            <img
              src={
                product.image ||
                "https://via.placeholder.com/700"
              }
              alt={product.name}
              className="w-full h-[600px] object-cover hover:scale-110 transition duration-700"
            />

          </div>

          {/* Product Info */}

          <div className="bg-white rounded-[35px] shadow-2xl p-10">

            <span className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full">

              <FaLeaf />

              Organic

            </span>

            <h1 className="text-5xl font-extrabold mt-6">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4 text-yellow-500">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span className="text-gray-600 ml-2">
                (4.9)
              </span>

            </div>

            <h2 className="text-5xl font-extrabold text-green-700 mt-8">
              ₹{product.price}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              {product.description ||
                "Fresh organic farm produce harvested directly from the farm and delivered to your doorstep."}

            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-green-50 rounded-2xl p-5">

                <h3 className="font-bold">
                  Category
                </h3>

                <p className="mt-2">
                  {product.category}
                </p>

              </div>

              <div className="bg-green-50 rounded-2xl p-5">

                <h3 className="font-bold">
                  Quantity
                </h3>

                <p className="mt-2">
                  {product.quantity}
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition flex justify-center items-center gap-3">

                <FaShoppingCart />

                Buy Now

              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition flex justify-center items-center gap-3">

                <FaHeart />

                Wishlist

              </button>

            </div>

          </div>

        </div>

        {/* Farmer Information */}

        <div className="bg-white rounded-[35px] shadow-2xl p-10 mt-12">

          <h2 className="text-4xl font-bold text-green-700 mb-8">

            👨‍🌾 Farmer Details

          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="flex gap-5">

              <FaUserCircle className="text-8xl text-green-700" />

              <div>

                <h3 className="text-3xl font-bold">

                  {product.farmer?.name ||
                    "Farmer"}

                </h3>

                <p className="text-gray-500 mt-3">

                  Verified Organic Farmer

                </p>

                <div className="flex items-center gap-3 mt-5">

                  <FaPhone />

                  <span>
                    +91 XXXXX XXXXX
                  </span>

                </div>

                <div className="flex items-center gap-3 mt-3">

                  <FaMapMarkerAlt />

                  <span>
                    Andhra Pradesh,
                    India
                  </span>

                </div>

              </div>

            </div>

            <div className="bg-green-50 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">

                Farm Highlights

              </h3>

              <ul className="space-y-4 mt-6">

                <li>
                  🌿 100% Organic
                </li>

                <li>
                  🚜 Modern Farming
                </li>

                <li>
                  🌾 Direct From Farm
                </li>

                <li>
                  🚚 Fast Delivery
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;