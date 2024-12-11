import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get("limit") || "6");
    const page = Number(url.searchParams.get("page") || 1);
    const category = url.searchParams.get("category");
    const level = url.searchParams.get("level")?.toLowerCase() || "beginner";

    const query: Record<string, any> = {};

    if (category && category !== "All") {
      query.category = category;
    }

    if (level && level !== "all") {
      query.level = level;
    }
    const skip = (page - 1) * limit;
    const courses = await CourseModel.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate({
        path: "instructor",
        select: "username",
      });

    return Response.json(
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
