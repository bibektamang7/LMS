'use client'

import React, { useState } from 'react';
import CourseCard from './CourseCard';
import CourseFilter, { FilterOptions } from './CourseFilter';
import Pagination from './Pagination';

type Course = {
  id: number;
  title: string;
  category: string;
  level: string;
  price: number;
  imageUrl: string;
};

type CourseListProps = {
  courses: Course[];
  filterOptions: FilterOptions;
};

const CourseList: React.FC<CourseListProps> = ({ courses, filterOptions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState<Partial<FilterOptions>>({});
  const coursesPerPage = 10;

  const filteredCourses = courses.filter((course) => {
    const categoryMatch = selectedFilters.category
      ? selectedFilters.category.includes(course.category)
      : true;
    const levelMatch = selectedFilters.level
      ? selectedFilters.level.includes(course.level)
      : true;
    return categoryMatch && levelMatch;
  });

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex">
      <div className="w-1/4 pr-4">
        <CourseFilter
          filterOptions={filterOptions}
          selectedFilters={selectedFilters}
          onFilterChange={(filters) => setSelectedFilters(filters)}
        />
      </div>
      <div className="w-3/4">
        <div className="grid grid-cols-2 gap-4">
          {paginatedCourses.map((course:Course) => (
            <CourseCard courseId='1'/>
          ))}
        </div>
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
