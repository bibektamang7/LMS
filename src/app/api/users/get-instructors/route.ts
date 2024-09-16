import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    await dbConnect();

    try {
        
        const instructors = await UserModel.find({
            userType: "instructor",
        });

        if (!instructors) {
            return NextResponse.json(
                { success: false, message:"No instructor availabel" },
                { status: 400 } 
            );
        }
        return NextResponse.json(
            { success: true, data: instructors },
            { status: 200 } 
        );
    } catch (error: any) {
        console.error("Something went wrong while fetching instructor:", error);

        return NextResponse.json(
            { success: false, message: "Error fetching instructor" },
            { status: 500 } 
        );
    }
}
