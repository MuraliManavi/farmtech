import { useEffect, useState } from "react";
import axios from "axios";

function Analytics() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    const { data } = await axios.get(
      "https://farmtech-s0md.onrender.com"
    );

    setStats(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">
        📊 Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-5 gap-4">

        <div className="bg-blue-500 text-white p-5 rounded-xl">
          <h2>Products</h2>
          <h1>{stats.totalProducts}</h1>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-xl">
          <h2>Orders</h2>
          <h1>{stats.totalOrders}</h1>
        </div>

        <div className="bg-purple-500 text-white p-5 rounded-xl">
          <h2>Accepted</h2>
          <h1>{stats.acceptedOrders}</h1>
        </div>

        <div className="bg-red-500 text-white p-5 rounded-xl">
          <h2>Rejected</h2>
          <h1>{stats.rejectedOrders}</h1>
        </div>

        <div className="bg-yellow-500 text-white p-5 rounded-xl">
          <h2>Revenue</h2>
          <h1>₹{stats.revenue}</h1>
        </div>

      </div>
    </div>
  );
}

export default Analytics;