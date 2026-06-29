import "dotenv/config";

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

import weatherRoutes from "./routes/weatherRoutes.js";

import diseaseRoutes from "./routes/diseaseRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/ai", aiRoutes);

app.use("/api/weather", weatherRoutes);

app.use("/api/disease", diseaseRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 FarmTech Backend Running Successfully",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});