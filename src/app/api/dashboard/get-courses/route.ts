import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    await dbConnect();
    try {
        const courses = await CourseModel.aggregate([
            {
               $lookup
           }
       ]) 
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            {status: 500}
        )
    }
}