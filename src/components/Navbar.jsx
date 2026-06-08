import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link to="/" className="text-2xl font-bold">
          🌾 FarmTech
        </Link>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/my-orders">My Orders</Link>
          <Link to="/farmer-orders">Farmer Orders</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/ai-assistant">AI Assistant</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;