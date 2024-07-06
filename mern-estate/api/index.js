import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connection = mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("server connection successful"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => console.log("Server listening at 3000"));
