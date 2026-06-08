import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/admin/stats"
    );

    setStats(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        👨‍💼 Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded-xl">
          <h2>Total Users</h2>
          <h1 className="text-4xl">
            {stats.users}
          </h1>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl">
          <h2>Total Products</h2>
          <h1 className="text-4xl">
            {stats.products}
          </h1>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl">
          <h2>Total Orders</h2>
          <h1 className="text-4xl">
            {stats.orders}
          </h1>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;