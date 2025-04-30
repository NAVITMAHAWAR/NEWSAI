import express from "express";
import {
  Preferences,
  fetchNewsByCategory,
} from "../controllers/newsController.js";

const newsRoutes = express.Router();

newsRoutes.post("/preferences/:id", Preferences);
newsRoutes.get("/news/:category", fetchNewsByCategory);

export default newsRoutes;
