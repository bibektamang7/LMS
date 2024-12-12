import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";
import {z} from 'zod'
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameQuerySchema = z.object({
    username: usernameValidation,
});

export async function GET(request: Request) {
    dbConnect();
    try {
        const { searchParams } = new URL(request.url);
        const queryParams = {
            username: searchParams.get('username')
        };

        const result = UsernameQuerySchema.safeParse(queryParams);

        if (!result.success) {
            const usernameErrors = result.error.format().username?._errors || [];
            return Response.json(
              {
                success: false,
                message:
                  usernameErrors?.length > 0
                    ? usernameErrors.join(', ')
                    : 'Invalid query parameters',
              },
              { status: 400 }
            );
          }
      
          const { username } = result.data;
      
          const existingVerifiedUser = await UserModel.findOne({
            username,
          });
      
          if (existingVerifiedUser) {
            return Response.json(
              {
                success: false,
                message: 'Username is already taken',
              },
              { status: 200 }
            );
          }
      
          return Response.json(
            {
              success: true,
              message: 'Username is unique',
            },
            { status: 200 }
          );
    } catch (error: any) {
        console.log("checking username error: ", error);
        return Response.json(
            { success: false, message: 'Error while checking username' },
            {status: 500}
        )
    }
}