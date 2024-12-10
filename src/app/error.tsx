"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-red-500">
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
