"use client";
import React, { useState, useEffect } from "react";
import { Course } from "@/types/Course";
import Image from "next/image";
import Link from "next/link";

type CourseListProps = {
  courses: Course[];
};

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const coursesPerPage = 6;

  // Filter the courses based on selected category and level
  useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        (selectedCategory === null || course.category === selectedCategory) &&
        (selectedLevel === null || course.level === selectedLevel)
    );
    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  }, [courses, selectedCategory, selectedLevel]);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      {/* Courses List */}
      <div className="flex flex-wrap gap-6">
        {currentCourses.map((course) => (
          <div
            key={course._id}
            className="overflow-hidden mt-5 relative !w-[92%] sm:!w-[350px] lg:!w-[380px] !mx-3 lg:!mx-6 rounded-b-[20px] rounded-t-[20px] !min-h-[580px] !h-[580px] shadow-light !shrink-0 flex-col hover:lg-shadow-medium bg-white"
          >
            <div className="flex flex-col justify-between !h-full">
              <div>
                <Image
                  src={course.thumbnail}
                  alt={course.courseTitle}
                  width={100}
                  height={50}
                  className="w-full h-[40%]"
                />
                <div className="mt-3 mx-5">
                  <div className="flex justify-between">
                    <Link href={`/course/${course._id}`}>
                      <h4 className="hover:text-indigo-600 text-gray-900 text-2xl md:!text-xl leading-[26px] md:!leading-[30px] font-bold line-clamp-2 break-before-all">
                        {course.courseTitle}
                      </h4>
                    </Link>
                    {/* <div>
                    <Image
                      src="/icons/share.png"
                      alt="share icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div> */}
                  </div>
                  {/* Course Description */}
                  <div className="mt-4">
                    <div className="flex flex-col items-start mt-3 gap-4 justify-center">
                      <div className="flex items-center justify-start gap-3">
                        <Image
                          src="/icons/person.png"
                          alt="mentor icons"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <div className="flex flex-wrap gap-x-1">
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">
                            {course.instructor.username}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-3">
                        <Image
                          src="/icons/date.png"
                          alt="date icons"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <div className="flex flex-wrap gap-x-1">
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">
                            Started on{" "}
                            {new Date(course.startIn).toLocaleDateString(
                              "en-GB",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-3">
                        <Image
                          src="/icons/video.png"
                          alt="video icons"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <div className="flex flex-wrap gap-x-1">
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">
                            Recorded video
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-3">
                        <Image
                          src="/icons/graduate.png"
                          alt="graduate icons"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                        <div className="flex flex-wrap gap-x-1">
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">
                            College Student & working Professional
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mx-5 items-center gap-3 py-3 border-t border-gray-200">
                  <h4 className="text-gray-900 text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-semibold">
                    $ {course.price}
                  </h4>
                  <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] line-through text-stroke-400">
                    114
                  </p>
                </div>
                <div className="opacity-100 text-indigo-500 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold rounded-md flex gap-2 justify-center items-center cursor-pointer hover:bg-[none] !rounded-bl-[18px] w-full bg-gray-100">
                  Explore
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from(
          { length: Math.ceil(filteredCourses.length / coursesPerPage) },
          (_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default CourseList;
