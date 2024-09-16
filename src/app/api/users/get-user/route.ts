import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";

export async function GET(request: Request) {
    dbConnect();
    try {
        const url = new URL(request.url);
        
        const userId = url.searchParams.get('userId');
        const user = await UserModel.findById(userId).select("-password -email").populate('enrolledCourses')
        if (!user) {
            return Response.json(
                { success: false, message: "User not found" },
                {status: 401}
            )
        }

        return Response.json(
            { success: true, data: user },
            {status: 200}
        )

    } catch (error: any) {
        console.log("Error on Get user", error);
        return Response.json(
            { success: false, message: "Error on Get user" },
            {status: 500}
        )
    }
}