import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";
export async function GET(request: NextRequest) {
  await dbConnect();
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Number(searchParams.get("limit") || "6");
    const page = Number(searchParams.get("page") || 1);
    const category = searchParams.get("category");
    const level = searchParams.get("level")?.toLowerCase() || "beginner";

    const query: Record<string, any> = {};

    if (category && category !== "All") {
      query.category = category;
    }

    if (level && level !== "all") {
      query.level = level;
    }
    const skip = (page - 1) * limit;
    const courses = await CourseModel.aggregate([
      { $match: query },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
      {
        $lookup: {
          from: "users", 
          localField: "instructor",
          foreignField: "_id",
          as: "instructor",
        },
      },
      { $unwind: "$instructor" }, 
      {
        $project: {
          courseTitle: 1,
          createdAt: 1,
          description: 1,
          features: 1,
          category: 1,
          level: 1,
          price: 1,
          discount: 1,
          startIn: 1,
          "instructor.username": 1,
          language: 1,
          endDate: 1,
          thumbnail: 1,
        },
      },
    ]);

    return NextResponse.json(
      {
        success: true,
        data: courses,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("Error on fetching courses", error);

    return Response.json(
      {
        success: false,
        message: "Error on fetching courses",
      },
      { status: 500 }
    );
  }
}
