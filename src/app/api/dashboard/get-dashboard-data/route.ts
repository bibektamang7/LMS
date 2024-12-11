import dbConnect from "@/dbConfig/dbConfig";
import UserModel from "@/models/user.model";
import CourseModel from "@/models/course.model";
import PaymentModel from "@/models/payment.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await dbConnect();
    console.log("requajfk ma ayean")
  try {
    // Fetch new students data (example logic, adjust as needed)
    const currentMonthStudents = await UserModel.countDocuments({
      createdAt: { $gte: new Date(new Date().setDate(1)) },
    });
    const lastMonthStudents = await UserModel.countDocuments({
      createdAt: {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        $lt: new Date(new Date().setDate(1)),
      },
    });
    const studentIncrease = Math.round(
      ((currentMonthStudents - lastMonthStudents) / (lastMonthStudents || 1)) *
        100
    );

    // Mock data for weekly distribution
    const studentData = await UserModel.aggregate([
      {
        $unwind: "$enrolledCourses", // Unwind the enrolledCourses array to group by each course enrollment
      },
      {
        $lookup: {
          from: "courses", // Assuming your courses collection is named "courses"
          localField: "enrolledCourses",
          foreignField: "_id",
          as: "courseDetails",
        },
      },
      {
        $unwind: "$courseDetails", // Unwind courseDetails to access course data
      },
      {
        $group: {
          _id: {
            year: { $year: "$courseDetails.startIn" }, // Group by the start year of the course
            week: { $week: "$courseDetails.startIn" }, // Group by the week of the course start
          },
          students: { $sum: 1 }, // Count the number of students enrolled each week
        },
      },
      {
        $project: {
          _id: 0,
          week: "$_id.week",
          year: "$_id.year",
          students: "$students",
        },
      },
      {
        $sort: { year: 1, week: 1 }, // Ensures the data is sorted chronologically
      },
    ]);

    // Format data for output (assigning "Week 1", "Week 2", etc.)
    const formattedStudentData = studentData.map((data, index) => ({
      day: `Week ${index + 1}`,
      students: data.students,
    }));
    // Fetch total income and growth
    const currentMonthIncome = await PaymentModel.aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(new Date().setDate(1)) },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$paymentAmount" },
        },
      },
    ]);

    const lastMonthIncome = await PaymentModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
            $lt: new Date(new Date().setDate(1)),
          },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$paymentAmount" },
        },
      },
    ]);

    const incomeIncrease = Math.round(
      (((currentMonthIncome[0]?.total || 0) -
        (lastMonthIncome[0]?.total || 0)) /
        (lastMonthIncome[0]?.total || 1)) *
        100
    );

    const incomeData = await PaymentModel.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            week: { $week: "$createdAt" },
          },
          totalIncome: { $sum: "$paymentAmount" },
        },
      },
      {
        $project: {
          _id: 0,
          week: "$_id.week",
          year: "$_id.year",
          income: "$totalIncome",
        },
      },
      {
        $sort: { year: 1, week: 1 }, // Ensures the data is sorted chronologically
      },
    ]);

    // Format data for output (assigning "Week 1", "Week 2", etc.)
    const formattedIncomeData = incomeData.map((data, index) => ({
      day: `Week ${index + 1}`,
      income: data.income,
    }));

    const topCourse = await PaymentModel.aggregate([
      {
        $group: {
          _id: "$courseId", // Group payments by courseId
          totalPayments: { $sum: 1 }, // Count the number of payments for each course
        },
      },
      {
        $lookup: {
          from: "courses", // Assuming your courses collection is named "courses"
          localField: "_id", // _id from the group (courseId)
          foreignField: "_id", // Match it with the _id of the courses collection
          as: "courseDetails",
        },
      },
      {
        $unwind: "$courseDetails", // Unwind the joined courseDetails
      },
      {
        $project: {
          _id: 0,
          courseTitle: "$courseDetails.courseTitle", // Include course title
          enrolledStudents: "$totalPayments", // Number of payments as enrolled students
        },
      },
      {
        $sort: { enrolledStudents: -1 }, // Sort by totalPayments in descending order
      },
      {
        $limit: 1, // Get only the top course
      },
    ]);

    // Fetch business growth data (mocked monthly data for simplicity)
    const businessGrowthData = await PaymentModel.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          totalGrowth: { $sum: "$paymentAmount" },
        },
      },
      {
        $project: {
          _id: 0,
          month: "$_id.month",
          year: "$_id.year",
          growth: "$totalGrowth",
        },
      },
      {
        $sort: { year: 1, month: 1 }, // Ensures the data is sorted chronologically
      },
    ]);

    // Format data for output (map month numbers to names)
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedBusinessGrowthData = businessGrowthData.map((data) => ({
      month: monthNames[data.month - 1],
      growth: data.growth,
    }));
    // Create response object
    const response = {
      newStudents: {
        count: currentMonthStudents,
        increase: studentIncrease,
        data: formattedStudentData,
      },
      totalIncome: {
        amount: currentMonthIncome[0]?.total || 0,
        increase: incomeIncrease,
        data: formattedIncomeData,
      },
      topCourse: {
        name: topCourse[0]?.courseTitle || "No courses available",
        enrollments: topCourse[0]?.enrolledStudents || 0,
      },
      formattedBusinessGrowthData,
    };

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
