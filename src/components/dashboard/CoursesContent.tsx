import React, { useState, useEffect } from 'react';

type Course = {
  id: number;
  title: string;
  category: string;
  duration: string;
  studentsEnrolled: number;
};

const coursesData: Course[] = [
  { id: 1, title: 'React for Beginners', category: 'Development', duration: '5 hours', studentsEnrolled: 120 },
  { id: 2, title: 'Advanced JavaScript', category: 'Development', duration: '8 hours', studentsEnrolled: 200 },
  { id: 3, title: 'UI/UX Design Basics', category: 'Design', duration: '4 hours', studentsEnrolled: 80 },
  { id: 4, title: 'Digital Marketing 101', category: 'Marketing', duration: '6 hours', studentsEnrolled: 150 },
  { id: 5, title: 'Python for Data Science', category: 'Data Science', duration: '10 hours', studentsEnrolled: 220 },
  { id: 6, title: 'Node.js Masterclass', category: 'Development', duration: '7 hours', studentsEnrolled: 180 },
];

const CoursesContent: React.FC = () => {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'title', direction: 'asc' });

  const coursesPerPage = 4;

  // Search and Filter Logic
  useEffect(() => {
    let filtered = coursesData.filter(
      (course) =>
        (selectedCategory === 'All' || course.category === selectedCategory) &&
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting logic
    if (sortConfig.key) {
      filtered = filtered.sort((a, b) => {
        if (a[sortConfig.key as keyof Course] < b[sortConfig.key as keyof Course]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key as keyof Course] > b[sortConfig.key as keyof Course]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to first page on filter
  }, [selectedCategory, searchTerm, sortConfig]);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Courses</h2>
      
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by course title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="category" className="font-medium">Filter by Category:</label>
        <select
          id="category"
          className="ml-2 p-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>

      {/* Course Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th
              className="border border-gray-300 p-2 text-left cursor-pointer"
              onClick={() => handleSort('title')}
            >
              Course Title {sortConfig.key === 'title' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th className="border border-gray-300 p-2 text-left">Category</th>
            <th
              className="border border-gray-300 p-2 text-left cursor-pointer"
              onClick={() => handleSort('duration')}
            >
              Duration {sortConfig.key === 'duration' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th
              className="border border-gray-300 p-2 text-left cursor-pointer"
              onClick={() => handleSort('studentsEnrolled')}
            >
              Students Enrolled {sortConfig.key === 'studentsEnrolled' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentCourses.length > 0 ? (
            currentCourses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{course.title}</td>
                <td className="border border-gray-300 p-2">{course.category}</td>
                <td className="border border-gray-300 p-2">{course.duration}</td>
                <td className="border border-gray-300 p-2">{course.studentsEnrolled}</td>
                <td className="border border-gray-300 p-2">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="ml-4 text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-4">No courses found.</td>
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

export default CoursesContent;
