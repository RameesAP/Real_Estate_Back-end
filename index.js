import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan"
dotenv.config();


mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongo DB!!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(morgan('dev'))

app.listen(5000, () => {
  console.log("Server is running on port 5000!");
});
