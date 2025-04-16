import express from "express";
import {
  addBookmark,
  removeBookmark,
  getBookmarks,
} from "../controllers/bookmarkController.js";

const bookmarksRoutes = express.Router();

bookmarksRoutes.get("/:id/bookmarks", getBookmarks);
bookmarksRoutes.post("/:id/bookmarks", addBookmark);
bookmarksRoutes.delete("/:id/bookmarks/:articleId", removeBookmark);

export default bookmarksRoutes;
