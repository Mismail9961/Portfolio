import { NextResponse, NextRequest } from "next/server";
import connect from "@/dbConfig/dbConfig";
import Project from "@/model/projectModels"; // ✅ use consistent name

export async function GET(request: NextRequest) {
  try {
    await connect();

    const projects = await Project.find({});

    return NextResponse.json({ success: true, projects }, { status: 200 });
  } catch (error) {
    console.error("❌ Error in /api/projects:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
