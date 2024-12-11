import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";

// Define the User interface as per your requirements
export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  registrationDate: string;
}

export async function GET(request: Request) {
  dbConnect();
  try {
    const url = new URL(request.url);

    const limit = parseInt(url.searchParams.get("limit") || "7");
    const page = parseInt(url.searchParams.get("page") || "1");

    const skip = (page - 1) * limit;

    const users = await UserModel.find().skip(skip).limit(limit);

    const userData = users.map((user) => ({
      _id: user._id.toString(),
      name: user.username,
      email: user.email,
      role: user.role,
      registrationDate: user.createdAt.toISOString(),
    }));

    return Response.json(
      {
        success: true,
        data: userData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error on fetching users:", error);

    return Response.json(
      {
        success: false,
        message: "Error on fetching users",
      },
      { status: 500 }
    );
  }
}
