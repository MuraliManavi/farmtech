import express from "express";
import {
  createReview,
  getReviews,
} from "../controllers/reviewController.js";

const router = express.Router();

router.post("/", createReview);
router.get("/:id", getReviews);

export default router;