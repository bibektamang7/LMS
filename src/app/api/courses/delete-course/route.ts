import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    await dbConnect();

    try {
        const { courseId } = await request.json();
        
        const isDeleted = await CourseModel.findByIdAndDelete(courseId);

        if (!isDeleted) {
            return NextResponse.json(
                { success: false, message: "Course not found" },
                { status: 404 }  // Use 404 for "not found"
            );
        }

        return NextResponse.json(
            { success: true, message: "Course deleted successfully" },
            { status: 200 } 
        );
    } catch (error: any) {
        console.error("Something went wrong while deleting course:", error);

        return NextResponse.json(
            { success: false, message: "Error deleting course" },
            { status: 500 } 
        );
    }
}
