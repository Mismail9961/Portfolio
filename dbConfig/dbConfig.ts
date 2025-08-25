// src/dbConfig/dbConfig.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false;

async function connect() {
  if (isConnected) {
    console.log("Using cached MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });

    isConnected = true;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}

export default connect;