import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}

export default Loading;
