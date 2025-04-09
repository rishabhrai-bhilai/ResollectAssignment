import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 dark:bg-gray-800">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 dark:border-blue-400 border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
        {/* Optional Text */}
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;