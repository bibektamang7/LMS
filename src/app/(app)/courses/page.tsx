'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FilterSection from '@/components/FilterSection';
import CourseList from '@/components/CourseList';
import { filterOptions } from '@/data/constant';
import { fetchInitialCourses } from '@/app/page';
const Courses: React.FC = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Development');
  const [selectedLevel, setSelectedLevel] = useState<string>('Beginner');
  const getCourses = async () => {
    const {data: coursesList } = await fetchInitialCourses({ level: selectedLevel, category: selectedCategory });
    setCourses(coursesList);
  }

  useEffect(() => {
    getCourses();
  }, [selectedCategory, selectedLevel]);


  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl md:!text-4xl leading-9 md:!leading-[44px] font-bold text-gray-900">Our Courses</h2>
      <h2 className="text-sm md:!text-base leading-[21px] md:!leading-6 font-light text-gray-900 py-2 w-[95%]">
        Discover industry-leading programs on emerging technologies taught by experienced mentors.
      </h2>

      <div className="flex mt-7 gap-8">
        <div className="w-1/4 pr-4 shadow-md px-2 py-4 rounded-md">
          <div className='flex-between mb-2 px-2 border-b-2'>
            <div className='flex-center gap-2'>
              <Image
                src="/icons/filter.png"
                alt="filter image"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="font-semibold text-lg">Filter</span>
            </div>
            <span className="text-sm font-semibold">Clear All</span>
          </div>
          <FilterSection
            header="Category"
            items={filterOptions.categories}
            selectedFilter={selectedCategory}
            onSelect={(item) => setSelectedCategory(item)}
          />
          <FilterSection
            header="Level"
            items={filterOptions.levels}
            selectedFilter={selectedLevel}
            onSelect={(item) => setSelectedLevel(item)}
          />
        </div>
        
        <div className="w-3/4">
          {/* Ensure CourseList only receives an array */}
          {courses.length < 1 ? (<>
            <div className="h-full flex items-center justify-center">
              No courses available for current filter.
            </div>
          </>) : (  
            <CourseList courses={courses} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
