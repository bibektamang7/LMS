'use client'
import React, { useState } from 'react';
import AddSyllabus from '@/components/course/AddSyllabus';

interface CourseFormProps {
  mentors: string[]; // Replace with appropriate mentor type if necessary
}



const AddCourse: React.FC<CourseFormProps> = ({ mentors=["bibek","bipin"] }) => {
  const [step, setStep] = useState(1);
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    price: '',
    startDate: '',
    endDate: '',
    language: '',
    mentor: '',
    description: '',
    thumbnail: '',
    categories: [] as string[],
  });

  const handleCourseDetailsChange = (e: any) => {
    const { name, value } = e.target;
    setCourseDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (category: string) => {
    setCourseDetails((prev) => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((cat) => cat !== category)
        : [...prev.categories, category];
      return { ...prev, categories: newCategories };
    });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Step {step} of 2</h2>
        <div className="flex space-x-4 mb-4">
          {step === 1 && <span className="text-gray-700">Course Details</span>}
          {step === 2 && <span className="text-gray-700">Add Syllabus</span>}
        </div>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-2xl font-bold mb-4">Course Details</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="title" className="block mb-1">Course Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={courseDetails.title}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block mb-1">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={courseDetails.price}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="startDate" className="block mb-1">Start Date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={courseDetails.startDate}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="endDate" className="block mb-1">End Date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={courseDetails.endDate}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="language" className="block mb-1">Language</label>
              <input
                type="text"
                id="language"
                name="language"
                value={courseDetails.language}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mentor" className="block mb-1">Mentor</label>
              <select
                id="mentor"
                name="mentor"
                value={courseDetails.mentor}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
              >
                <option value="">Select Mentor</option>
                {mentors.map((mentor, index) => (
                  <option key={index} value={mentor}>{mentor}</option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={courseDetails.description}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
                rows={4}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="thumbnail" className="block mb-1">Thumbnail URL</label>
              <input
                type="text"
                id="thumbnail"
                name="thumbnail"
                value={courseDetails.thumbnail}
                onChange={handleCourseDetailsChange}
                className="border rounded p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Categories</label>
              <div className="flex flex-wrap gap-2">
                {['Development', 'Design', 'Marketing', 'Business', 'Data Science', 'AI'].map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`border rounded p-2 ${courseDetails.categories.includes(category) ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 2 && (
        <AddSyllabus
          courseDetails={courseDetails}
          onBack={handleBack}
        />
      )}
    </div>
  );
};

export default AddCourse;
