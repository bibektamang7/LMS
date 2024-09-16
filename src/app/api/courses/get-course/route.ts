import dbConnect from "@/dbConfig/dbConfig";
import CourseModel from "@/models/course.model";

export async function GET(request: Request) {
    dbConnect();
    try {
        const url = new URL(request.url);
        
        const courseId = url.searchParams.get('courseId');
        const course = await CourseModel.findById(courseId).populate('instructor', 'username bio profile expertise');
        if (!course) {
            return Response.json(
                { success: false, message: "No such course" },
                {status: 400}
            )
        }
        return Response.json(
            {
                success: true,
                data: course
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