'use client'
import React, { useState, useEffect } from 'react';
import { Course } from '@/types/Course';

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
    const filtered = courses.filter((course) =>
      (selectedCategory === null || course.category === selectedCategory) &&
      (selectedLevel === null || course.level === selectedLevel)
    );
    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  }, [courses, selectedCategory, selectedLevel]);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full">
      {/* Courses List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <div key={course.id} className="p-4 border rounded-lg shadow-lg">
            <img src={course.imageUrl} alt={course.title} className="mb-4" />
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p>Category: {course.category}</p>
            <p>Level: {course.level}</p>
            <p>Price: ${course.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(filteredCourses.length / coursesPerPage) }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
