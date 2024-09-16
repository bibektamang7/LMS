import React from 'react';

interface AddFeaturesProps {
    features: any;
    setFeatures: any;
}

const AddFeatures: React.FC<AddFeaturesProps> = ({features,setFeatures}) => {

  const handleAddFeature = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    const newFeature = e.currentTarget.feature.value;
    if (newFeature && !features.includes(newFeature)) {
      setFeatures([...features, newFeature]);
    }
    e.currentTarget.reset();
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Course Features</h3>
      <form onSubmit={handleAddFeature}>
        <div className="mb-4">
          <label htmlFor="feature" className="block mb-1">Add Feature</label>
          <input
            type="text"
            id="feature"
            name="feature"
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">Add</button>
      </form>

      <div className="mt-4">
        <h4 className="font-bold">Added Features:</h4>
        <ul>
          {features.map((feature: string, index: number) => (
            <li key={index} className="py-1">{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddFeatures;
