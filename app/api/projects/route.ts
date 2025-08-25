// src/app/api/products/add/route.ts

import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import connect from "@/dbConfig/dbConfig";
import projectModel from "@/model/projectModels";

// Secret key used to verify the token (from .env file)
const SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connect();

    // 1. Get the Authorization header (e.g. "Bearer <token>")
    const authHeader = request.headers.get("authorization");

    // 2. If the header is missing or doesn't start with "Bearer ", reject the request
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
    }

    // 3. Extract the token part
    const token = authHeader.split(" ")[1];

    // 4. Verify the token using the secret key
    try {
      jwt.verify(token, SECRET);
    } catch (err) {
      return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
    }

    // 5. Parse the body of the request (data sent from frontend)
    const { name, description, uses, link } = await request.json();

    // 6. Validate the input fields
    if (!name || !description || !Array.isArray(uses) || uses.length === 0 || !link) {
      return NextResponse.json(
        { error: "All fields (name, description, uses, link) are required." },
        { status: 400 }
      );
    }

    // 7. Check if a project with the same name already exists
    const existingProject = await projectModel.findOne({ name });
    if (existingProject) {
      return NextResponse.json(
        { error: "Project with this name already exists." },
        { status: 400 }
      );
    }

    // 8. Save the new project to the database
    const newProject = new projectModel({
      name,
      description,
      uses,
      link,
    });

    await newProject.save();

    // 9. Send a success response
    return NextResponse.json({ message: "Project added successfully!" }, { status: 201 });

  } catch (error: any) {
    // Handle duplicate errors separately
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Duplicate project detected." },
        { status: 400 }
      );
    }

    // Catch any other errors
    return NextResponse.json(
      { error: "Something went wrong while adding the project." },
      { status: 500 }
    );
  }
}