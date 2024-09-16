"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Course } from "@/types/Course"; // Assuming you have a Course type
import Container from "@/components/Container";
import Link from "next/link";

const MyCourses: React.FC = () => {
  const enrolledCourses = useSelector(
    (state: any) => state.user.user.enrolledCourses
  );

  const [recentlyEnrolledCourses, setRecentlyEnrolledCourses] = useState<
    Course[]
  >([]);

  // Assuming recently enrolled courses are fetched or filtered by a condition
  useEffect(() => {
    const recentCourses = enrolledCourses.filter((course: Course) => {
      // Filter condition for recently enrolled courses (e.g., last 30 days)
      const enrollmentDate = new Date(course.startIn); // Assuming enrollmentDate is in your Course type
      const today = new Date();
      const diffDays = Math.floor(
        (today.getTime() - enrollmentDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      return diffDays <= 30; // last 30 days
    });
    setRecentlyEnrolledCourses(recentCourses);
  }, [enrolledCourses]);

  return (
    <Container>
      <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto py-3 relative">
        <h2 className="text-3xl font-bold mb-4">My Courses</h2>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold mb-2">Enrolled Courses</h3>
          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course: Course) => (
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

        <section>
          <h3 className="text-2xl font-semibold mb-2">
            Recently Enrolled Courses
          </h3>
          {recentlyEnrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentlyEnrolledCourses.map((course) => (
                <div
                  key={course._id}
                  className="border p-4 rounded-md shadow-md"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.courseTitle}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h4 className="text-lg font-bold">{course.courseTitle}</h4>
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
            <p>No recent enrollments.</p>
          )}
        </section>
      </div>
    </Container>
  );
};

export default MyCourses;
