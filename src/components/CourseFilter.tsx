import React from 'react';

export type FilterOptions = {
  category: string[];
  level: string[];
  priceRange: number[];
};

type CourseFilterProps = {
  filterOptions: FilterOptions;
  selectedFilters: Partial<FilterOptions>;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
};

const CourseFilter: React.FC<CourseFilterProps> = ({ filterOptions, selectedFilters, onFilterChange }) => {
  const handleCategoryChange = (category: string) => {
    const newFilters = {
      ...selectedFilters,
      category: selectedFilters.category?.includes(category)
        ? selectedFilters.category.filter(c => c !== category)
        : [...(selectedFilters.category || []), category],
    };
    onFilterChange(newFilters);
  };

  return (
    <div className="w-full p-4 bg-white shadow rounded-lg">
      <h4 className="font-semibold mb-3">Filter by Category</h4>
      <div>
        {filterOptions.category.map((category) => (
          <div key={category} className="mb-2">
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.category?.includes(category) || false}
                onChange={() => handleCategoryChange(category)}
              />
              <span className="ml-2">{category}</span>
            </label>
          </div>
        ))}
      </div>
      <h4 className="font-semibold mt-4 mb-3">Filter by Level</h4>
      <div>
        {filterOptions.level.map((level) => (
          <div key={level} className="mb-2">
            <label>
              <input
                type="checkbox"
                checked={selectedFilters.level?.includes(level) || false}
                onChange={() => handleCategoryChange(level)}
              />
              <span className="ml-2">{level}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFilter;
