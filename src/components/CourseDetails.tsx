// src/components/CourseDetail.tsx

import React, { useEffect, useState } from 'react';
import { fetchCourseDetails } from '@/lib/utils';
import { Course } from '@/types/Course';

interface CourseDetailProps {
  courseId: string;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ courseId }) => {
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourseDetails(courseId).then(data => setCourse(data));
  }, [courseId]);

  if (!course) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{course.description}</p>
      
      <div className="flex items-center mb-6">
        <img src={course.instructor.avatar} alt={course.instructor.name} className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
          <p className="text-gray-600">{course.instructor.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Language:</strong> {course.language}</p>
        <p><strong>Price:</strong> ${course.price}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3">Syllabus</h2>
        <ul className="space-y-2">
          {course.syllabus.map((item, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg">
              <strong>Week {item.week}:</strong> {item.topic}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Student Reviews</h2>
        {course.reviews.length > 0 ? (
          course.reviews.map((review, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-2">
              <p><strong>{review.user}</strong>: {review.comment}</p>
              <p>Rating: {review.rating} / 5</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
