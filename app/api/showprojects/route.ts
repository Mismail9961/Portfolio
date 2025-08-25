import { NextResponse, NextRequest } from "next/server";
import connect from "@/dbConfig/dbConfig";
import projectModel from "@/model/projectModels";

export async function GET(request: NextRequest) {
  try {
    await connect();

    const projects = await projectModel.find({});

    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}