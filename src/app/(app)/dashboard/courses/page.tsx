"use client";
import React, { useState, useEffect } from "react";
import { openAddCourseWidget } from "@/redux/features/Dashboard/dashboardSlice";
import { useDispatch } from "react-redux";
import { deleteCourse, fetchInitialCourses } from "@/lib/api";
import { Course } from "@/types/Course";
import { filterOptions } from "@/data/constant";

const CoursesContent: React.FC = () => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);


  const coursesPerPage = 7;

  const dispatch = useDispatch();

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await fetchInitialCourses({
        limit: 7,
        page: currentPage,
        category: selectedCategory,
        level: "All"
      });

      let filtered = data.filter(
        (course: Course) =>
          (selectedCategory === "All" ||
            course.category === selectedCategory) 
      );


      setFilteredCourses(filtered);
      setCurrentPage(1); 
    };
    getCourses();
  }, [selectedCategory]);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleCourseDelete = async (courseId: string) => {
    const {success } = await deleteCourse(courseId);
    if (success) {
      alert("Course Deleted successfully")
    }
  }

  return (
    <div className="w-full">
      <div className="flex-between">
        <h2 className="text-3xl font-bold mb-4">Manage Courses</h2>
        <button
          onClick={() => dispatch(openAddCourseWidget())}
          className="button"
        >
          Add Course
        </button>
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="font-medium"
        >
          Filter by Category:
        </label>
        <select
          id="category"
          className="ml-2 p-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {filterOptions.categories.map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th
              className="border border-gray-300 p-2 text-left cursor-pointer"
            >
              Course Title
            </th>
            <th className="border border-gray-300 p-2 text-left">Category</th>

            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCourses.length > 0 ? (
            currentCourses.map((course) => (
              <tr
                key={course._id}
                className="hover:bg-gray-100"
              >
                <td className="border border-gray-300 p-2">{course.courseTitle}</td>
                <td className="border border-gray-300 p-2">
                  {course.category}
                </td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => handleCourseDelete(course._id)} className="ml-4 text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center p-4"
              >
                No courses found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default CoursesContent;
