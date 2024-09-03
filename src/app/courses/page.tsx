import React from 'react';
import CourseList from '@/components/CourseList';
type Course = {
    id: number;
    title: string;
    category: string;
    level: string;
    price: number;
    imageUrl: string;
  };
  

const courses:Course[] = [
  // Your course data
];

const filterOptions = {
  category: ['Development', 'Design', 'Marketing', 'Business'],
  level: ['Beginner', 'Intermediate', 'Advanced'],
  priceRange: [0, 50, 100, 200],
};

const Courses: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl md:!text-4xl leading-9 md:!leading-[44px] font-bold text-gray-900">Courses</h2>
      <h2 className='text-sm md:!text-base leading-[21px] md:!leading-6 font-light text-gray-900 py-2 w-[95%]'>Discover industry-leading programs on emerging technologies taught by experienced mentors, providing practical knowledge and vital industry insights.</h2>
      <CourseList courses={courses} filterOptions={filterOptions} />
    </div>
  );
};

export default Courses;
