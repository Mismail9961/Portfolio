import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Sign token with payload and 1h expiry
      const token = jwt.sign({ email }, SECRET, { expiresIn: "15m" });

      return NextResponse.json({ success: true, token });
    } else {
      return NextResponse.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}