import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/admin/stats"
    );

    setStats(data);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h3>Users</h3>
          <p className="text-3xl font-bold">
            {stats.users}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3>Products</h3>
          <p className="text-3xl font-bold">
            {stats.products}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3>Orders</h3>
          <p className="text-3xl font-bold">
            {stats.orders}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3>Revenue</h3>
          <p className="text-3xl font-bold">
            ₹{stats.revenue}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;