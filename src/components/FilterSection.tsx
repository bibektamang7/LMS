import React, { useState } from 'react';
import axios from 'axios';

type FilterSectionProps = {
  header: string;
  items: string[];
  selectedFilter: string;
  onSelect: (item: string) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({ header, items, selectedFilter, onSelect }) => {
  return (
    <div className="mb-6 border-b-2 pb-4">
      <h4 className="font-bold mb-2">{header}</h4>
      <ul className="px-2">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <label htmlFor={item} className="cursor-pointer flex items-center">
              <input
                type="radio"
                value={item}
                id={item}
                name={header} // Ensures only one can be selected per header
                checked={selectedFilter === item}
                onChange={() => onSelect(item)} // Select when clicked
                className="mr-2"
              />
              <span className="select-none hover:text-indigo-500 cursor-pointer text-gray-800 font-[500] leading-[22px]">
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSection;
