import { useEffect, useState } from "react";
import axios from "axios";

function FarmerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/orders"
    );

    setOrders(data);
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${id}`,
        { status }
      );

      alert(`Order ${status}`);

      fetchOrders();
    } catch (error) {
      alert("Update Failed");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        📦 Farmer Orders
      </h1>

      <div className="grid gap-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow rounded p-4"
          >
            <h3 className="font-bold text-lg">
              {order.product?.name}
            </h3>

            <p>
              Buyer: {order.buyer?.name}
            </p>

            <p>
              Quantity: {order.quantity}
            </p>

            <p>
              Total: ₹{order.totalPrice}
            </p>

            <p>
              Status:
              <span className="font-bold ml-2">
                {order.status}
              </span>
            </p>

            {order.status === "Pending" && (
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() =>
                    updateStatus(
                      order._id,
                      "Accepted"
                    )
                  }
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      order._id,
                      "Rejected"
                    )
                  }
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FarmerOrders;