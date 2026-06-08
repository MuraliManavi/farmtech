import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((item) => {
    const matchName = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      item.category === category;

    return matchName && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <div className="bg-green-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">
          Farm Fresh Marketplace
        </h1>

        <p className="mt-3">
          Buy Directly From Farmers
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">

          <input
            type="text"
            placeholder="Search products..."
            className="border p-3 rounded-lg flex-1"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            className="border p-3 rounded-lg"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option>All</option>
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Rice</option>
            <option>Grains</option>
          </select>
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/400"
                }
                alt={product.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">

                <h2 className="font-bold text-xl">
                  {product.name}
                </h2>

                <p className="text-gray-500">
                  {product.category}
                </p>

                <p className="text-green-700 font-bold text-lg mt-2">
                  ₹{product.price}
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  Stock: {product.quantity}
                </p>

                <Link
                  to={`/product/${product._id}`}
                >
                  <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                    View Details
                  </button>
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Marketplace;