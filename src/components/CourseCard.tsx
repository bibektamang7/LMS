import React from "react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({courseId}:{courseId:string}) => {
  return (
    <Link href={`/course/${courseId}`} className="mt-6">
      <div className="bg-white rounded-lg flex items-center justify-center md:justify-between">
        <h1 className="title p-4">Our Courses</h1>
        <div
          className="hidden md:flex md:items-center gap-1"
        >
          <p>View all</p>
          <Image
            src="/icons/forward.png"
            alt="forward icon"
            width={14}
            height={14}
            className="object-contain"
          />
        </div>
      </div>
      <div className="overflow-hidden mt-5 relative !w-[92%] sm:!w-[350px] lg:!w-[380px] !mx-3 lg:!mx-6 rounded-b-[20px] rounded-t-[20px] !min-h-[580px] !h-[580px] shadow-light !shrink-0 flex-col hover:lg-shadow-medium bg-white">
        <div className="flex flex-col justify-between !h-full">
          <div>
            <Image
              src="/images/main.avif"
              alt="Course Image"
              width={100}
              height={50}
              className="w-full h-[40%]"
            />
            <div className="mt-3 mx-5 ">
              <div className="flex-between">
                <div>
                  <h4 className="text-gray-900 text-2xl md:!text-xl leading-[26px] md:!leading-[30px] font-bold line-clamp-2 break-before-all ">
                    Data Science Master Pro 2024
                  </h4>
                </div>
                <div>
                  <Image
                    src="/icons/share.png"
                    alt="share icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </div>
              {/* course Description */}
              <div className="mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/person.png"
                    alt="person icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">
                    Bibek Tamang
                  </p>
                </div>
                <div>
                  <p>Started on</p>
                </div>
                <div>
                  <p>Course Resources</p>
                </div>
                <div>
                  <p>College student and working professional</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mx-5 items-center gap-3 py-5 border-t border-gray-200">
              <h4 className="text-gray-900 text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-semibold">
                $ 95.88
              </h4>
              <p className="text-xs md:!text-sm leading-[18px] md:!leading-[22px] line-through text-stroke-400">
                114
              </p>
            </div>
            <div className="opacity-100 text-indigo-500 text-sm px-3 py-[10px] sm:!text-base sm:!px-6 sm:!py-3 font-semibold rounded-md flex gap-2 justify-center items-center cursor-pointer hover:bg-[none] !rounded-bl-[18px] w-full bg-gray-100">Explore</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
// #9E9D9F
