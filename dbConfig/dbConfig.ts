// src/dbConfig/dbConfig.ts
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let isConnected = false; // Track connection state

async function connect() {
  if (isConnected) {
    console.log("✅ Using cached MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    isConnected = true;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}

export default connect;
