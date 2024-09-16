"use client";
import React, { useState } from "react";
import CourseDetailsForm from "./CourseDetailsForm";
import AddSyllabus from "./AddSyllabus";
import AddFeatures from "./AddFeature";
import ConfirmCourse from "./ConfirmCourse";
import { SyllabusItem } from "@/types/Course";
import { Course } from "@/types/Course";


const AddCourse = () => {

  const [step, setStep] = useState(1);

  // State for course details
  const [courseDetails, setCourseDetails] = useState<Course>({
    courseTitle: '',
    instructor: '',
    description: '',
    category: '',
    level: '',
    price: 0,
    startIn:'',
    endsIn: '',
    language: '',
    duration: '',
    thumbnail: '',
  });
  
  const [syllabus, setSyllabus] = useState<SyllabusItem[]>([]);
  const [features, setFeatures] = useState<string[]>([]);

  const handleCourseDetailsChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setCourseDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (category: string) => {
    setCourseDetails((prev) => ({
      ...prev,
      category,
    }));
  };

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);

  
  return (
    <div className="container bg-white mx-auto p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Step {step} of 3</h2>
        <div className="flex space-x-4 mb-4">
          {step === 1 && <span className="text-gray-700">Course Details</span>}
          {step === 2 && <span className="text-gray-700">Add Syllabus</span>}
          {step === 3 && <span className="text-gray-700">Add Features</span>}
        </div>
      </div>

      {/* Rendering the respective form based on the step */}
      {step === 1 && (
        <CourseDetailsForm
          courseDetails={courseDetails}
          onChange={handleCourseDetailsChange}
          onCategoryChange={handleCategoryChange}
        />
      )}

      {step === 2 && (
        <AddSyllabus
          syllabus={syllabus}
          setSyllabus={setSyllabus}
        />
      )}

      {step === 3 && (
        <AddFeatures
          features={features}
          setFeatures={setFeatures}
        />
      )}
      {step === 4 && <ConfirmCourse  courseDetails={courseDetails} onBack={handleBack} syllabus={syllabus} features={features} />}

      <div className="flex justify-between mt-6">
        {step !== 1 && step < 4 && (
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Back
          </button>
        )}
        {step !== 3 && step < 4 && (
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            type="button"
            onClick={handleNext}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Confirm Course
          </button>
        )}
      </div>
    </div>
  );
};

export default AddCourse;
