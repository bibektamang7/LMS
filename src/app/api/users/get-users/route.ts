import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";

export async function GET(request: Request) {
  dbConnect();
  try {
    const url = new URL(request.url);
    const limit = url.searchParams.get("limit") || "6";


      const users = await UserModel.find().limit(parseInt(limit));
      return Response.json(
          {
              success: true,
                data: users,  
          },
          {status: 201},
      )
  } catch (error: any) {
    console.log("Error on fetching courses");

    return Response.json(
      {
        success: false,
        message: "Error on fetching courses",
      },
      { status: 500 }
    );
  }
}
