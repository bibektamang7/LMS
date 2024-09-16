import React from 'react';
import { Course } from '@/types/Course';

interface CourseDetailsFormProps {
  courseDetails: Course;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onCategoryChange: (category: string) => void;
}

const CourseDetailsForm: React.FC<CourseDetailsFormProps> = ({
  courseDetails,
  onChange,
  onCategoryChange,
}) => (
  <form>
    {/* Course Title */}
    <div className="mb-4">
      <label htmlFor="courseTitle" className="block mb-1">Course Title</label>
      <input
        type="text"
        id="courseTitle"
        name="courseTitle"
        value={courseDetails.courseTitle}
        onChange={onChange}
        className="border rounded p-2 w-full"
      />
    </div>

    {/* Course Price */}
    <div className="mb-4">
      <label htmlFor="price" className="block mb-1">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={courseDetails.price}
        onChange={onChange}
        className="border rounded p-2 w-full"
      />
    </div>

    

    {/* Start and End Date */}
    <div className="flex space-x-4 mb-4">
      <div>
        <label htmlFor="startIn" className="block mb-1">Start Date</label>
        <input
          type="date"
          id="startIn"
          name="startIn"
          value={courseDetails.startIn.toString().split('T')[0]}
          onChange={onChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="endsIn" className="block mb-1">End Date</label>
        <input
          type="date"
          id="endsIn"
          name="endsIn"
          value={courseDetails.endsIn.toString().split('T')[0]}
          onChange={onChange}
          className="border rounded p-2 w-full"
        />
      </div>
    </div>

    {/* Course Image */}
    <div className="mb-4">
      <label htmlFor="thumbnail" className="block mb-1">Course Image URL</label>
      <input
        type="text"
        id="thumbnail"
        name="thumbnail"
        value={courseDetails.thumbnail}
        onChange={onChange}
        className="border rounded p-2 w-full"
      />
    </div>

    {/* Language and Level */}
    <div className="flex space-x-4 mb-4">
      <div>
        <label htmlFor="language" className="block mb-1">Language</label>
        <input
          type="text"
          id="language"
          name="language"
          value={courseDetails.language}
          onChange={onChange}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="level" className="block mb-1">Level</label>
        <select
          id="level"
          name="level"
          value={courseDetails.level}
          onChange={onChange}
          className="border rounded p-2 w-full"
        >
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
    </div>

    {/* Instructor */}
    <div className="mb-4">
      <label htmlFor="instructor" className="block mb-1">Instructor</label>
      <input
        type="text"
        id="instructor"
        name="instructor"
        value={courseDetails.instructor}
        onChange={onChange}
        className="border rounded p-2 w-full"
      />
    </div>

    {/* Description */}
    <div className="mb-4">
      <label htmlFor="description" className="block mb-1">Description</label>
      <textarea
        id="description"
        name="description"
        value={courseDetails.description}
        onChange={onChange}
        className="border rounded p-2 w-full"
        rows={4}
      />
    </div>

    {/* Categories */}
    <div className="mb-4">
      <label className="block mb-1">Categories</label>
      <div className="flex flex-wrap gap-2">
        {['Development', 'Design', 'Marketing', 'Business', 'Data Science', 'AI'].map((category) => (
          <button
            key={category}
            name="category"
            type="button"
            className={`border rounded p-2 ${courseDetails.category === category ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>

  </form>
);

export default CourseDetailsForm;
