'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FilterSection from '@/components/FilterSection';
import CourseList from '@/components/CourseList';
import axios from 'axios';
import { Course } from '@/types/Course';

const filterOptions = {
  categories: ['Development', 'Design', 'Marketing', 'Business', 'Data Science', 'AI'],
  levels: ['beginner', 'intermediate', 'advanced'],
};

const Courses: React.FC = () => {
  // const { data: coursesData, isError, isLoading } = useGetCoursesQuery({ page: 1, limit: 12, category: '', level: '' });

  const [courses, setCourses] = useState<Course[]>([]); // Initialize as an empty array
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  // Set the initial courses when the query data is available
  // useEffect(() => {
  //   console.log(typeof coursesData?.data)
  //   if (coursesData && coursesData.data) {
  //     setCourses(coursesData.data); // Ensure that the data is an array before setting it
  //   }
  // }, [coursesData]);

  // API call to fetch filtered courses
  const fetchFilteredCourses = async (category: string, level: string) => {
    try {
      const response = await axios.get('/api/courses/get-courses', {
        params: {
          category: category || '',
          level: level || '',
        },
      });
      setCourses(response.data.data);
    } catch (error) {
      console.error('Error fetching courses', error);
      setCourses([]); // On error, set to an empty array to avoid map errors
    }
  };

  // Trigger API call when filters change
  useEffect(() => {
    fetchFilteredCourses(selectedCategory, selectedLevel);
  }, [selectedCategory, selectedLevel]);

  // if (isError) {
  //   return <h1>Error...</h1>;
  // }

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

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
          <CourseList courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
