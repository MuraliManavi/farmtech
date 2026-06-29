import { useEffect, useState } from "react";
import axios from "axios";

function BuyerDashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://farmtech-s0md.onrender.com"
      );

    console.log("Products:", data);

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const buyProduct = async (product) => {
  try {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    await axios.post(
      "https://farmtech-s0md.onrender.com",
      {
        buyer: user._id,
        productId: product._id,
        quantity: 1,
      }
    );

    alert("Order Placed Successfully");
  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Failed to Place Order"
    );
  }
};
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <h1>🛒 Buyer Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <h3>{product.name}</h3>

            <p>
              Category: {product.category}
            </p>

            <p>
              Price: ₹{product.price}/kg
            </p>

            <p>
              Available: {product.quantity}
            </p>

            <button
                onClick={() => buyProduct(product)}
                className="bg-green-600 text-white px-4 py-2 rounded mt-3"
            >
             Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerDashboard;