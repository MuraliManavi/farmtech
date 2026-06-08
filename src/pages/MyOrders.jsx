import { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/orders"
      );

      const myOrders = data.filter(
        (order) => order.buyer?._id === user._id
      );

      setOrders(myOrders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white shadow rounded p-5 border"
            >
              <h2 className="text-xl font-bold">
                {order.product?.name}
              </h2>

              <p>
                Quantity: {order.quantity}
              </p>

              <p>
                Total: ₹{order.totalPrice}
              </p>

              <p>
                Status:
                <span className="text-orange-600 font-bold ml-2">
                  {order.status}
                </span>
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {new Date(
                  order.createdAt
                ).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;