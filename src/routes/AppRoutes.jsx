import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import MyOrders from "../pages/MyOrders";
import FarmerOrders from "../pages/FarmerOrders";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Analytics from "../pages/Analytics";
import Weather from "../pages/Weather";
import AIAssistant from "../pages/AIAssistant";
import AdminDashboard from "../pages/AdminDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/marketplace"
        element={<Marketplace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/buyer-dashboard"
        element={<BuyerDashboard />}
      />

      <Route
        path="/my-orders"
        element={<MyOrders />}
      />

      <Route
        path="/farmer-orders"
        element={<FarmerOrders />}
      />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />


      <Route
        path="/cart"
        element={<Cart />}
      />

      <Route
        path="/checkout"
        element={<Checkout />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />

      <Route
        path="/weather"
        element={<Weather />}
      />

      <Route
        path="/ai-assistant"
        element={<AIAssistant />}
      />

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />
    </Routes>
  );
}

export default AppRoutes;