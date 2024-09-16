import React from "react";
import { SyllabusItem } from "@/types/Course";
import { Course } from "@/types/Course";
import Link from "next/link";
import { useAddCourseMutation } from "@/redux/query/course";


interface ConfirmCourseProps {
  courseDetails: Course;
  syllabus: SyllabusItem[];
  features: string[];
  onBack: any;
}

const ConfirmCourse: React.FC<ConfirmCourseProps> = ({
  onBack,
  courseDetails,
  syllabus,
  features,
}) => {
    const [addCourse] = useAddCourseMutation();
  const handleSubmit = async () => {
    const data = {
      courseDetails,
      courseSyllabus: syllabus,
      courseFeatures: features,
    };
      try {
        await addCourse(data);
      } catch (error: any) {
        console.log(error)
      }
  };
  return (
    <div className="container bg-white mx-auto p-6">
      <h3 className="text-2xl font-bold mb-4">Confirm Course Details</h3>

      {/* Course Details */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Course Information</h4>
        <div className="mb-2">
          <strong>Title:</strong> {courseDetails.courseTitle}
        </div>
        <div className="mb-2">
          <strong>Price:</strong> {courseDetails.price}
        </div>
        <div className="mb-2">
          <strong>Start Date:</strong> {courseDetails.startIn}
        </div>
        <div className="mb-2">
          <strong>End Date:</strong> {courseDetails.endsIn}
        </div>
        <div className="mb-2">
          <strong>Language:</strong> {courseDetails.language}
        </div>
        <div className="mb-2">
          <strong>Mentor:</strong> {courseDetails.instructor}
        </div>
        <div className="mb-2">
          <strong>Description:</strong> {courseDetails.description}
        </div>
        <div className="mb-2">
          <strong>Thumbnail:</strong>{" "}
          <img
            src={courseDetails.thumbnail}
            alt="Course Thumbnail"
            className="h-16"
          />
        </div>
        <div className="mb-2">
          <strong>Level:</strong> {courseDetails.level}
        </div>
        <div className="mb-2">
          <strong>Categories:</strong> {courseDetails.category}
        </div>
      </div>

      {/* Syllabus Details */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Syllabus</h4>
        {syllabus.length > 0 ? (
          <ul className="list-disc pl-5">
            {syllabus.map((item: SyllabusItem, index) => (
              <li key={index}>
                <strong>{item.title}:</strong>{" "}
                <Link
                  href={item.title}
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No syllabus items added.</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConfirmCourse;
