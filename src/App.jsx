import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingAIChat from "./components/FloatingAIChat";
import AppRoutes from "./routes/AppRoutes";

// Optional
// import Loader from "./components/Loader";
// import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>

      {/* Optional Loader */}
      {/* <Loader /> */}

      {/* Optional Toast */}
      {/* <Toaster position="top-right" /> */}

      <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-br from-green-50 via-white to-green-100">

        {/* Navigation */}
        <Navbar />

        {/* Floating Components */}
        <FloatingWhatsApp />
        <FloatingAIChat />
        <ScrollToTop />

        {/* Main Content */}
        <main className="flex-1 pt-0">
          <AppRoutes />
        </main>

        {/* Footer */}
        <Footer />

      </div>

    </Router>
  );
}

export default App;