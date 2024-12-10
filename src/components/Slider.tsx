"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Course } from "@/types/Course";

const Slider = ({courses}: {courses: Course[]}) => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // Total number of slides
  const slideWidth = 380; // Adjust this to match your actual slide width

  const sliderRef = useRef<HTMLDivElement>(null);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const isDragging = useRef(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    setPositionByIndex();
  }, [currentSlide]);

  const setPositionByIndex = () => {
    currentTranslate.current = currentSlide * -(slideWidth + 24);
    prevTranslate.current = currentTranslate.current;
    setSliderPosition();
  };

  const setSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const touchStart = (index: number) => (event: React.TouchEvent | React.MouseEvent) => {
    isDragging.current = true;
    startPos.current = getPositionX(event);
    animationRef.current = requestAnimationFrame(animation);
  };

  const touchMove = (event: React.TouchEvent | React.MouseEvent) => {
    if (isDragging.current) {
      const currentPosition = getPositionX(event);
      currentTranslate.current = prevTranslate.current + currentPosition - startPos.current;
      setSliderPosition();
    }
  };

  const touchEnd = () => {
    cancelAnimationFrame(animationRef.current as number);
    isDragging.current = false;

    const movedBy = currentTranslate.current - prevTranslate.current;

    if (movedBy < -50 && currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }

    if (movedBy > 50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    setPositionByIndex();
  };

  const getPositionX = (event: React.TouchEvent | React.MouseEvent) => {
    return event.type.includes("mouse")
      ? (event as React.MouseEvent).clientX
      : (event as React.TouchEvent).touches[0].clientX;
  };

  const animation = () => {
    setSliderPosition();
    if (isDragging.current) requestAnimationFrame(animation);
  };

  return (
    <div id="sliders" className="relative pt-6 overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-out"
        onMouseDown={touchStart(currentSlide)}
        onMouseMove={touchMove}
        onMouseUp={touchEnd}
        onMouseLeave={touchEnd}
        onTouchStart={touchStart(currentSlide)}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {courses.map((course) => (
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
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">{course.instructor.username}</p>
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
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">Started on { new Date(course.startIn).toLocaleDateString("en-GB",{day:"numeric", month:"short", year:"numeric"})}</p>
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
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">Recorded video</p>
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
                          <p className="text-gray-900 text-xs md:!text-sm leading-[18px] md:!leading-[22px] font-bold">College Student & working Professional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex mx-5 items-center gap-3 py-3 border-t border-gray-200">
                  <h4 className="text-gray-900 text-lg md:!text-xl leading-[26px] md:!leading-[30px] font-semibold">
                    RS {course.price}
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
      {/* Slider Navigation Buttons */}
      <Image
        src="/icons/greaterThan.png"
        alt="lessThan icon"
        width={40}
        height={40}
        onClick={handlePrev}
        className="absolute rotate-180 top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-gray-900 rounded-full p-2 hover:bg-gray-300" 
      />
      <Image
        src="/icons/greaterThan.png"
        alt="greaterThan Icon"
        width={40}
        height={40}
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-gray-900 rounded-full p-2 hover:bg-gray-300"
      />
    </div>
  );
};

export default Slider;
