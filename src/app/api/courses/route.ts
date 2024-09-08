import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";

export async function GET(request: Request) {
  dbConnect();
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "6";
    const category = url.searchParams.get("category");
    const level = url.searchParams.get("level");

    const query: any = {};

    if (category) {
      query.category = category; // Assuming category is an embedded document with a title field
    }

    if (level) {
      query.level = level;
    }

    // Query the database with filters and limit
      const courses = await CourseModel.find(query).limit(parseInt(limit));
      
      return Response.json(
          {
              success: true,
                data: courses,  
          },
          {status: 201},
      )
  } catch (error: any) {
    console.log("Error on fetching courses");

    return Response.json(
      {
        success: false,
        message: "Error on fetching courses",
      },
      { status: 500 }
    );
  }
}
