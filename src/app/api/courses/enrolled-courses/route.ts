import mongoose from "mongoose"
import dbConnect from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import UserModel from "@/models/user.model";

export async function GET(request: NextRequest) {

  await dbConnect(); 

  try {
    const token = request.headers.get("Authorization")?.split("Bearer ")[1];

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
    const user = await UserModel.findById(token);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        {status: 400}
      )
    };

    const userCourses = await UserModel.aggregate([
      {
        $match: {
          _id: user._id, 
        }
      },
      {
        $lookup: {
          from: "courses",
          localField: "enrolledCourses",
          foreignField: "_id",
          as: "enrolledCourses",
          pipeline: [
            {
              $project: {
                courseTitle: 1,
                price: 1,
                thumbnail: 1,
                description: 1,
                features: 1,
                category: 1,
                level: 1,
                language: 1,
                startIn: 1,
                endDate: 1,
              }
            }
          ]
        }
      }
    ])

    
    return NextResponse.json(
      { success: true, data: userCourses[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching session:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
