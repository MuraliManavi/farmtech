import express from "express";

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { question } = req.body;

    const answer = `
      AI Assistant Response:

      Question:
      ${question}

      Suggestion:
      Improve soil health, use organic manure,
      monitor irrigation and pest control.
    `;

    res.json({
      answer,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;