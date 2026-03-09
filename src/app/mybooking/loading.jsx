import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 mb-4 animate-pulse"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
          </div>

          <div className="mb-3 space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded"></div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <div className="h-8 w-20 bg-gray-200 rounded"></div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default loading;
