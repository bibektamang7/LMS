import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
    await dbConnect();

    try {
        const { userId, updates } = await request.json();
        
        const updatedUser = await UserModel.findByIdAndUpdate(userId, updates);

        if (!updatedUser) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 400 }  
            );
        }

        return NextResponse.json(
            { success: true, message: "user updated successfully" },
            { status: 200 } 
        );
    } catch (error: any) {
        console.error("Something went wrong while updating course:", error);

        return NextResponse.json(
            { success: false, message: "Error updating user" },
            { status: 500 } 
        );
    }
}
