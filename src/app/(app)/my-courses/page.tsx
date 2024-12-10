import React from "react";
import { Course } from "@/types/Course"; // Assuming you have a Course type
import Link from "next/link";
import { baseApi } from "@/data/constant";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const fetchEnrolledCourses = async (token: string) => {
  const res = await fetch(`${baseApi}/courses/enrolled-courses`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch enrolled courses");
  }
  return res.json();
}


const MyCourses: React.FC = async () => {
  const token = await getServerSession(authOptions);
  if (!token) {
    //TODO: handle this to route to login if not authenticated
    return <>Please login first</>
  }
  const { data: courses } = await fetchEnrolledCourses(token.user._id); 

  return (
    <>
      <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto py-3 relative">
        <h2 className="text-3xl font-bold mb-4">My Courses</h2>

        <section className="mb-10">
          {courses.enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.enrolledCourses.map((course: Course) => (
                <div
                  key={course._id}
                  className="border p-4 rounded-md shadow-md"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.courseTitle}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <Link href={`/video/${course._id}`} className="text-lg font-bold">{course.courseTitle}</Link>
                  <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                    Category: {course.category}
                  </p>
                  <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                    Level: {course.level}
                  </p>
                  <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                    Enrolled on:{" "}
                    {new Date(course.startIn).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No courses enrolled yet.</p>
          )}
        </section>
      </div>
    </>
  );
};

export default MyCourses;
