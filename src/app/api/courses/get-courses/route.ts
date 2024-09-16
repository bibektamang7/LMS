import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";
import UserModel from "@/models/user.model";
import mongoose from "mongoose";


export async function GET(request: Request) {
  dbConnect();
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "6";
    const category = url.searchParams.get("category");
    const level = url.searchParams.get("level") || 'beginner';

    // Query the database with filters and limit
    const courses = await CourseModel.find({
      $or: [
        { category },
        {level}
      ]
    }).limit(parseInt(limit)).populate({
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
