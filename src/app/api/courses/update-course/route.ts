import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
    // Ensure the database connection is established
    await dbConnect();

    try {
        // Parse the request body to get the courseId and updates
        const { courseId, updates } = await request.json();

        // Find the course by ID and update with the new data
        const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, updates, {
            new: true, // Return the updated document
            runValidators: true, // Ensure the updates adhere to the schema
        });

        // If the course is not found, return an error
        if (!updatedCourse) {
            return NextResponse.json(
                { success: false, message: "Course not found" },
                { status: 404 } // 404 Not Found
            );
        }

        // Return the updated course in the response
        return NextResponse.json(
            { success: true, message: "Course updated successfully", course: updatedCourse },
            { status: 200 } // 200 OK
        );
    } catch (error: any) {
        console.error("Something went wrong while updating the course:", error);

        // Return a failure response in case of an error
        return NextResponse.json(
            { success: false, message: "Error updating course" },
            { status: 500 } // 500 Internal Server Error
        );
    }
}
