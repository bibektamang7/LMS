import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";

export async function GET(request: Request) {
    dbConnect();
    try {
        const url = new URL(request.url);

        const courseTitle = url.searchParams.get('courseName');
        const course = await CourseModel.findOne({ courseTitle });
        if (!course) {
            return Response.json(
                { success: false, message: "No such course" },
                {status: 400}
            )
        }
        return Response.json(
            {
                success: true,
                date: course
            },
            {status: 201},
        )

    } catch (error: any) {
        console.log("Error while fetching course details", error);
        return Response.json(
            { success: false, message: "something went wrong while fetching course details" },
            {status:500}
        )
    }
}