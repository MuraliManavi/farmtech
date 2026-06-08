import { useEffect, useState } from "react";
import axios from "axios";

function Checkout() {
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

  const placeOrder = async () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    for (const item of cart) {
      await axios.post(
        "http://localhost:5000/api/orders",
        {
          buyer: user._id,
          farmer: item.product.farmer,
          product: item.product._id,
          quantity: item.quantity,
          totalPrice:
            item.product.price *
            item.quantity,
        }
      );
    }

    alert("Order Placed Successfully");
  };

  const makePayment = async () => {
  const { data } = await axios.post(
    "http://localhost:5000/api/payment/create-order",
    {
      amount: total,
    }
  );

  const options = {
    key: "YOUR_KEY_ID",
    amount: data.amount,
    currency: data.currency,
    order_id: data.id,

    name: "FarmTech",

    description: "Product Purchase",

    handler: async function () {
      alert("Payment Successful");

      window.location.href =
        "/payment-success";
    },
  };

  const razor = new window.Razorpay(
    options
  );

  razor.open();
};

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.product.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <h2>Total Amount: ₹{total}</h2>

      <button onClick={placeOrder}>
        Place Order
      </button>
      <button onClick={makePayment}>
         Pay Now
        </button>
    </div>
  );
}

export default Checkout;