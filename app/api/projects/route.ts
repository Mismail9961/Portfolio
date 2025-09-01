// src/app/api/products/add/route.ts

import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import connect from "@/dbConfig/dbConfig";
import Project from "@/model/projectModels";

const SECRET = process.env.JWT_SECRET || "your-secret-key";

interface ProjectBody {
  name: string;
  description: string;
  uses: string[];
  link: string;
}

export async function POST(request: NextRequest) {
  try {
    await connect();

    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, SECRET);
    } catch {
      return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
    }

    const { name, description, uses, link } = (await request.json()) as ProjectBody;

    if (!name || !description || !Array.isArray(uses) || uses.length === 0 || !link) {
      return NextResponse.json(
        { error: "All fields (name, description, uses, link) are required." },
        { status: 400 }
      );
    }

    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return NextResponse.json(
        { error: "Project with this name already exists." },
        { status: 400 }
      );
    }

    const newProject = await Project.create({ name, description, uses, link });

    return NextResponse.json(
      { message: "Project added successfully!", project: newProject },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Duplicate project detected." },
        { status: 400 }
      );
    }

    console.error("Error in /api/products/add:", error);
    return NextResponse.json(
      { error: "Something went wrong while adding the project." },
      { status: 500 }
    );
  }
}
