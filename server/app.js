import express from "express";
import dotenv from "dotenv";
const app = express();
import dbconnect from "./config/db.js";

dotenv.config();
dbconnect();
console.log(process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log(`server is Running on the port ${process.env.PORT}`);
});
