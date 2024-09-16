import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";
import CourseModel from "@/models/course.model";
import PaymentModel from "@/models/payment.model";

export async function GET(request: Request) {
  dbConnect();
  try {
    const { searchParams } = new URL(request.url);

    const params = {
      pidx: searchParams.get("pidx"),
      transaction_id: searchParams.get("transaction_id"),
      tidx: searchParams.get("tidx"),
      total_amount: searchParams.get("total_amount"),
      status: searchParams.get("status"),
      purchase_order_id: searchParams.get("purchase_order_id"),
      purchase_order_name: searchParams.get("purchase_order_name"),
      };
      
      console.log(params);
      
      const success = params.status === "Completed";
    if (!success) {
      return Response.json(
        { success: false, message: "Could not complete payment" },
        { status: 500 }
      );
    }

    await PaymentModel.create({
      userId: params.purchase_order_id,
      courseId: params.purchase_order_name,
      paymentAmount: params.total_amount,
      paymentState: "Pending",
      paymentMethod: "khalti",
      transactionId: params.tidx,
      pidx: params.pidx,
      dataFromVerificationReq: params,
      apiQueryFromUser: searchParams,
    });
    
      const user = await UserModel.findById(params.purchase_order_id);
      const course = await CourseModel.findById(params.purchase_order_name);
      if(!course){
          return Response.json(
              { success: false, message: "Course not found after payment" },
              {status: 500},
        )
      }

      user.enrolledCourses.push(course._id);
      await user.save()
      return Response.json(
          { success: true },
          {status: 200}
      )
  } catch (error: any) {
    // console.log("Error on payment proceed", error);
    return Response.json(
      {
        success: false,
        message: "Erro on payment proceed",
      },
      { status: 500 }
    );
  }
}
