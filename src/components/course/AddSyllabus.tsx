'use client'
import React, { useState } from 'react';

interface SyllabusItem {
  title: string;
  videoUrl: string;
}

interface AddSyllabusProps {
  courseDetails: {
    title: string;
    price: string;
    startDate: string;
    endDate: string;
    language: string;
    mentor: string;
    description: string;
    thumbnail: string;
    categories: string[];
  };
  onBack: () => void;
}

const AddSyllabus: React.FC<AddSyllabusProps> = ({ courseDetails, onBack }) => {
  const [syllabus, setSyllabus] = useState<SyllabusItem[]>([]);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleAddSyllabusItem = () => {
    if (currentTitle && currentVideoUrl) {
      setSyllabus([...syllabus, { title: currentTitle, videoUrl: currentVideoUrl }]);
      setCurrentTitle('');
      setCurrentVideoUrl('');
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Add Syllabus</h3>
      <div className="mb-4">
        <label htmlFor="syllabusTitle" className="block mb-1">Syllabus Title</label>
        <input
          type="text"
          id="syllabusTitle"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="videoUrl" className="block mb-1">Video URL</label>
        <input
          type="text"
          id="videoUrl"
          value={currentVideoUrl}
          onChange={(e) => setCurrentVideoUrl(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        type="button"
        onClick={handleAddSyllabusItem}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Syllabus Item
      </button>

      {syllabus.length > 0 && (
        <ul className="list-disc pl-5 mb-4">
          {syllabus.map((item, index) => (
            <li key={index} className="mb-2">
              <strong>{item.title}</strong> - <a href={item.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">{item.videoUrl}</a>
              </li>
          ))}
        </ul>
      )}

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
          onClick={() => {
            // You can add functionality to save the course and syllabus details here
            alert('Course and Syllabus added successfully!');
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddSyllabus;
