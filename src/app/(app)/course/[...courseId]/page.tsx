import Link from "next/link";
import React, {FC} from "react";
import InstructorCard from "@/components/InstructorCard";
import { baseApi } from "@/data/constant";

const fetchCourse = async (courseId: string) => {
  const response = await fetch(`${baseApi}/courses/get-course?courseId=${courseId}`, {
    cache: "no-store",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch coures");
  }
  return response.json();
}

interface PageProps {
  params: {
    courseId: string,
  }
}

const page: FC<PageProps> = async ({params}) => {
  
  const { courseId } = params;
  const { data: course } = await fetchCourse(courseId);
  
  return (
    <section className="relative lg:!pb-32 mb-8 overflow-x-clip">
      <div className="bg-gray-800 py-4 md:!py-6">
        <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto flex w-full justify-between md:!gap-[17px] lg:!gap-[50px] md:mb-9 flex-col !gap-10 md:!flex-col lg:!flex-row items-center gap-y-4">
          <div className="w-full lg:max-w-[500px]">
            <div className="flex items-center gap-1 pb-2">
              <div className="flex-center gap-1 text-gray-600">
                <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-normal text-white cursor-pointer"></p>
              </div>
              {/* <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold text-white">
                  Mechine Learing
                </p> */}
            </div>
            <div className="flex flex-col gap-4 md:!pt-0 md:!pb-2">
              <div>
                <h1 className="text-2xl md:!text-4xl leading-9 md:!leading-[44px] font-bold text-white">
                  {course?.courseTitle}
                </h1>
              </div>
              <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-slate-300">
                {course?.description}
              </p>
              <h4 className="text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-semibold text-white">
                RS {course?.price || "FREE"}
              </h4>
              <div className="flex gap-3 flex-col sm:!flex-row pt-3 md:!pt-3">
                {course.isEnrolled ? (
                  <Link
                    href="/my-course"
                    className="opacity-100 text-white hover:bg-indigo-500 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold flex-center gap-2 rounded-lg w-full sm:!w-[200px] bg-indigo-700"
                  >
                    My courses
                  </Link>
                ) : (
                  <Link
                    href="/payment"
                    className="opacity-100 text-white hover:bg-indigo-500 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold flex-center gap-2 rounded-lg w-full sm:!w-[200px] bg-indigo-700"
                  >
                    Enroll Now
                  </Link>
                )}
                <Link
                  href=""
                  className="opacity-100 text-indigo-500 bg-indigo-50 hover:bg-indigo-100 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold flex-center gap-2 rounded-lg sm:!w-[200px] w-full"
                >
                  Share
                </Link>
              </div>
            </div>
          </div>
          <InstructorCard
            avatar={course.instructor.profile}
            expertise={course.instructor.expertise}
            bio={course.instructor.bio}
            name={course.instructor.username}
          />
        </div>
        <div className="w-full">
          <div className="px-4 md:!px-6 max-w-[1248px] xl:!mx-auto flex flex-col gap-16 !p-0 bg-gradient-to-b from-white to-[#FFF7F5] w-[80%] m-auto rounded-lg">
            <div className="sm:flex sm:gap-6 flex-wrap rounded-lg justify-around sm:py-[44px] p-8">
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  {new Date(course?.startIn).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  Start Date
                </p>
              </div>
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  {course?.language}
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  Language
                </p>
              </div>
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  {new Date(course?.endDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  End Date
                </p>
              </div>
              <div className="flex flex-col sm:items-center gap-1 mb-6 sm:m-0">
                <h3 className="text-xl md:!text-2xl leading-[30px] md:!leading-8 font-bold text-gray-900">
                  7-10 PM IST WED
                </h3>
                <p className="text-sm md:!text-base leading-[21px] md:!leading-6 font-normal text-[#757575]">
                  Doubt Class Timing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TODO:Add syllabus and other section */}
      {/* <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">
        

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-indigo-600">Syllabus</h2>
          <ul className="space-y-4">
            {course.syllabus.map((item, index) => (
              <li
                key={index}
                className="p-4 border-l-4 border-indigo-600 bg-gray-50 rounded-md shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-gray-700">
                    Week {item.week}
                  </span>
                  <span className="text-sm text-gray-500">{item.topic}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800">

          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-600 text-center">
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.reviews.map((review, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg shadow-lg"
                >
                  <p className="text-xl italic leading-relaxed mb-8">
                    "{review.comment}"
                  </p>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <img
                      src=""
                      alt={review.user}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center mt-10">
                    <h3 className="text-lg font-semibold">{review.user}</h3>
                    <span className="text-sm text-gray-200">
                      Rating: {review.rating} / 5
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default page;
