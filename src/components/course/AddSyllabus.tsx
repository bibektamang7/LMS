'use client'
import React, { useState } from 'react';



interface AddSyllabusProps {
  syllabus: any;
  setSyllabus: any;
}

const AddSyllabus: React.FC<AddSyllabusProps> = ({ syllabus,setSyllabus}) => {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');


  const handleAddSyllabusItem = () => {
    if (currentTitle && currentVideoUrl) {
      setSyllabus([...syllabus, {  description: currentDescription,title: currentTitle, videoUrl: currentVideoUrl }]);
      setCurrentTitle('');
      setCurrentVideoUrl('');
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Add Syllabus</h3>

      {/* Syllabus Title Input */}
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
      <label htmlFor="description" className="block mb-1">Description</label>
      <textarea
        id="description"
        name="description"
        value={currentDescription}
        onChange={(e) => setCurrentDescription(e.target.value)}
        className="border rounded p-2 w-full"
        rows={4}
      />
    </div>
      {/* Video URL Input */}
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

      {/* Add Syllabus Button */}
      <button
        type="button"
        onClick={handleAddSyllabusItem}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Syllabus Item
      </button>

      {/* Display Syllabus List */}
      {syllabus.length > 0 && (
        <ul className="list-disc pl-5 mb-4">
          {syllabus.map((item: any, index: number) => (
            <li key={index} className="mb-2">
              <strong>{item.title}</strong> -{' '}
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {item.videoUrl}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddSyllabus;
