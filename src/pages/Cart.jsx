import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  <nav className="sticky top-0 backdrop-blur-md bg-white/80 border-b"></nav>
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/cart"
    );

    setCart(data);
  };

  const removeItem = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/cart/${id}`
    );

    loadCart();
  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.product.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Shopping Cart</h1>

      {cart.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.product.name}</h3>

          <p>Qty: {item.quantity}</p>

          <p>
            ₹
            {item.product.price *
              item.quantity}
          </p>

          <button
            onClick={() =>
              removeItem(item._id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <a href="/checkout">
        <button>Proceed To Checkout</button>
      </a>
    </div>
  );
}

export default Cart;