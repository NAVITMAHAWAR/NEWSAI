import express from "express";
import {
  getReadingHistory,
  clearReadingHistory,
  addReadingHistory,
} from "../controllers/readingController.js";

const readingHistoryRoutes = express.Router();

readingHistoryRoutes.get("/:id/reading-history", getReadingHistory);
readingHistoryRoutes.post("/:id/reading-history", addReadingHistory);
readingHistoryRoutes.delete("/:id/reading-history", clearReadingHistory);

export default readingHistoryRoutes;
