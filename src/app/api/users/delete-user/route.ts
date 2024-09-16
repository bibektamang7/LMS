import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    await dbConnect();

    try {
        const { userId } = await request.json();
        
        const isDeleted = await UserModel.findByIdAndDelete(userId);

        if (!isDeleted) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }  
            );
        }

        return NextResponse.json(
            { success: true, message: "user deleted successfully" },
            { status: 200 } 
        );
    } catch (error: any) {
        console.error("Something went wrong while deleting user:", error);

        return NextResponse.json(
            { success: false, message: "Error deleting user" },
            { status: 500 } 
        );
    }
}
