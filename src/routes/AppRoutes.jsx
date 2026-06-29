import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
import Weather from "../pages/Weather";
import AIAssistant from "../pages/AIAssistant";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import DiseaseDetection from "../pages/DiseaseDetection";

function AppRoutes() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Marketplace */}
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/product/:id" element={<ProductDetails />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* AI & Weather */}
      <Route path="/assistant" element={<AIAssistant />} />
      <Route path="/weather" element={<Weather />} />

      {/*Disease Detection*/}
      <Route path="/disease-detection" element={<DiseaseDetection />}/>
      

      {/* Information */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;