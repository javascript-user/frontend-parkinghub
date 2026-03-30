import React from "react";

function MapLoading() {
  return (
    <div className="absolute inset-0 bg-white bg-opacity-80 z-30 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="mb-4 flex justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-color-light rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-color-primary border-r-color-secondary rounded-full animate-spin"></div>
          </div>
        </div>
        <p className="text-lg font-semibold text-color-dark">Loading map...</p>
        <p className="text-sm text-gray-500 mt-2">Please wait while we prepare your map</p>
      </div>
    </div>
  );
}

export default MapLoading;
