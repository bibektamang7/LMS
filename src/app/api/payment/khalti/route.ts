import dbConnect from "@/dbConfig/dbConfig";
import axios from "axios";
import CourseModel from "@/models/course.model";
import UserModel from "@/models/user.model";
import { useSession } from "next-auth/react";

export async function POST(request: Request) {
  dbConnect();
  try {
    const {courseId, courseAmount, userId} = await request.json();
    const formData = JSON.stringify({
      return_url: "http://localhost:3000/api/payment/callback",
      website_url: "http://localhost:3000",
      amount: Number(courseAmount) * 100,
      purchase_order_id: userId,
      purchase_order_name: courseId,
    });
    const headers = {
      Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
      "Content-Type": "application/json",
    };

    const requestOptions = {
      url: `${process.env.KHALTI_GATEWAY_URL}/api/v2/epayment/initiate/`,
      method: "POST",
      headers,
      data: formData,
    };
    const response = await axios.request(requestOptions);
      console.log(response);
    const { payment_url } = response.data;
    return Response.json({ success: true, data: payment_url }, { status: 200 });

  } catch (error: any) {
    console.log("Something went wrong on payment process", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong while processing payment",
      },
      { status: 500 }
    );
  }
}
