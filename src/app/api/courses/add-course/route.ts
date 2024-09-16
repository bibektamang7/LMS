import dbConnect from '@/dbConfig/dbConfig';
import CourseModel from '@/models/course.model';
import UserModel from '@/models/user.model';

export async function POST(request: Request) {
  // Connect to MongoDB
  await dbConnect();

  try {
    const { courseDetails, courseFeatures, courseSyllabus} = await request.json();
    const instructorUsername = courseDetails.instructor;
    const instructor = await UserModel.findOne({ username: instructorUsername });
    if (!instructor) {
      return Response.json(
        { success: false, message: "Instructor not found" },
        {status: 401},
      )
    }


    // Create a new course object
    const newCourse = new CourseModel({
      courseTitle: courseDetails.courseTitle,
      price: courseDetails.price,
      thumbnail: courseDetails.thumbnail,
      instructor: instructor,
      description: courseDetails.description,
      syllabus: courseSyllabus,
      features: courseFeatures,
      category: courseDetails.category,
      level: courseDetails.level,
      startIn: courseDetails.startIn,
      endDate: courseDetails.endDate,
      language: courseDetails.language,
    });

    // Save the course to the database
    await newCourse.save();

    return new Response(JSON.stringify({ message: 'Course created successfully', course: newCourse }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error creating course', error }), { status: 500 });
  }
}
