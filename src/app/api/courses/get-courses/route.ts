import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";
import UserModel from "@/models/user.model";
console.log("user model", UserModel)
export async function GET(request: Request) {
  await dbConnect();
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "6";
    const category = url.searchParams.get("category");
    const level = url.searchParams.get("level")?.toLowerCase() || 'beginner';
   
    const query: Record<string, any> = {};

    if(category) {
      query.category = category;
    }

    if(level) {
      query.level = level;
    }

    const courses = await CourseModel.find(query)
      .limit(parseInt(limit))
      .sort({createdAt: -1})
      .populate({
      path: 'instructor',
      select: 'username'
      });

      return Response.json(
          {
              success: true,
                data: courses,  
          },
          {status: 201},
      )
  } catch (error: any) {
    console.log("Error on fetching courses",error);

    return Response.json(
      {
        success: false,
        message: "Error on fetching courses",
      },
      { status: 500 }
    );
  }
}
