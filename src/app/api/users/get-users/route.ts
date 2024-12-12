import { NextRequest, NextResponse } from 'next/server';
import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  registrationDate: string;
}

export async function GET(request: NextRequest) {
  await dbConnect();
  try {
    const searchParams = request.nextUrl.searchParams;

    const limit = parseInt(searchParams.get("limit") || "7");
    const page = parseInt(searchParams.get("page") || "1");

    const skip = (page - 1) * limit;

    const users = await UserModel.find({}, '-password').skip(skip).limit(limit);

    const userData: User[] = users.map((user) => ({
      _id: user._id.toString(),
      name: user.username,
      email: user.email,
      role: user.role,
      registrationDate: user.createdAt.toISOString(),
    }));

    return NextResponse.json(
      {
        success: true,
        data: userData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error on fetching users:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Error on fetching users",
      },
      { status: 500 }
    );
  }
}

