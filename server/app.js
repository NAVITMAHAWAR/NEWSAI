import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRoutes from "./router/userRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import newsRoutes from "./router/newsRoutes.js";
import bookmarksRoutes from "./router/bookmarksRoutes.js";
import readingHistoryRoutes from "./router/readingHistoryRoutes.js";

const app = express();

app.use(
  session({
    secret: "hello_this_string",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser());

app.use(express.json());
dotenv.config();

dbConnect();
// console.log(process.env.PORT);
app.use("/auth", userRoutes);
app.use("/api", newsRoutes);
app.use("/api", bookmarksRoutes);
app.use("/api", readingHistoryRoutes);
app.listen(process.env.PORT || 8001, () => {
  console.log(`server is Running on the port ${process.env.PORT}`);
});
