import dbConnect from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
// import CourseModel from "@/models/course.model";

export async function GET(req: Request) {
  await dbConnect();
  const CourseModel = require("@/models/course.model").default;
  try {
    const url = new URL(req.url);
    const courseId = url.searchParams.get("courseId");
    const course = await CourseModel.findById(courseId);
    if (!course) {
      return NextResponse.json(
        { success: false, message: "Course not found" },
        { status: 400 }
      );
    }
    const courseAggregate = await CourseModel.aggregate([
      {
        $match: {
          _id: course._id,
        },
      },
      {
        $project: {
          courseTitle: 1,
          instructor: 1,
          syllabus: {
            $map: {
              input: "$syllabus",
              as: "item",
              in: {
                title: "$$item.title",
                video: "$$item.video",
              },
            },
          },
        },
      },
    ]);

      return NextResponse.json(
          { success: true, data: courseAggregate[0] },
          {status: 200}
      )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
