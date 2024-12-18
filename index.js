import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// import routes
import userRoutes from "./routes/user_route.js";
import authRouter from "./routes/auth_route.js";
import listingRouter from "./routes/listing_route.js";

// use of routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

//middleware

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "internal server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// DB Connect
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongo DB!!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000!");
});
