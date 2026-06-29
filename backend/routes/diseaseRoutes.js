import express from "express";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

router.post(
  "/detect",
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "Please upload an image.",
        });
      }

      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const imageBuffer = fs.readFileSync(req.file.path);

      const result = await model.generateContent([
        {
          inlineData: {
            data: imageBuffer.toString("base64"),
            mimeType: req.file.mimetype,
          },
        },
        `
You are an agriculture expert.

Analyze this crop image and answer in this format:

Disease:
Symptoms:
Cause:
Treatment:
Prevention:
Confidence:
      `,
      ]);

      const response = await result.response;

      fs.unlinkSync(req.file.path);

      res.json({
        success: true,
        result: response.text(),
      });

    } catch (error) {
      console.error(error);

      if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

export default router;