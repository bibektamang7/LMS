import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    dbConnect();
    try {
        const searchParams = request.nextUrl.searchParams;
        
        const userId = searchParams.get('userId');
        const user = await UserModel.findById(userId).select("-password -email").populate('enrolledCourses')
        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                {status: 401}
            )
        }

        return NextResponse.json(
            { success: true, data: user },
            {status: 200}
        )

    } catch (error: any) {
        console.log("Error on Get user", error);
        return NextResponse.json(
            { success: false, message: "Error on Get user" },
            {status: 500}
        )
    }
}