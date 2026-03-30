import React from "react";
import useMapContext from "../../hooks/use-MapContext";
import { MdTune } from "react-icons/md";

function ParkingFilters() {
  const { filters, setFilters } = useMapContext();

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  const resetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 100,
      minAvailability: 0,
      maxDistance: 10,
      minRating: 0,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <MdTune className="text-color-primary text-xl" />
          <h3 className="font-bold text-lg text-color-dark">Filters</h3>
        </div>
        <button
          onClick={resetFilters}
          className="text-xs font-semibold text-color-primary hover:text-blue-800 transition"
        >
          Reset
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold text-gray-700">
            Price Range
          </label>
          <span className="text-sm font-bold text-color-primary">
            ₹{filters.minPrice} - ₹{filters.maxPrice}/hr
          </span>
        </div>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="200"
            value={filters.maxPrice}
            onChange={(e) =>
              handleFilterChange("maxPrice", parseInt(e.target.value))
            }
            className="w-full accent-color-primary cursor-pointer"
          />
          <div className="text-xs text-gray-500">Max: ₹{filters.maxPrice}/hr</div>
        </div>
      </div>

      {/* Distance Filter */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold text-gray-700">Distance</label>
          <span className="text-sm font-bold text-color-primary">
            Up to {filters.maxDistance} km
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="20"
          value={filters.maxDistance}
          onChange={(e) =>
            handleFilterChange("maxDistance", parseInt(e.target.value))
          }
          className="w-full accent-color-primary cursor-pointer"
        />
      </div>

      {/* Availability Filter */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold text-gray-700">
            Minimum Availability
          </label>
          <span className="text-sm font-bold text-color-secondary">
            {filters.minAvailability}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={filters.minAvailability}
          onChange={(e) =>
            handleFilterChange("minAvailability", parseInt(e.target.value))
          }
          className="w-full accent-color-secondary cursor-pointer"
        />
      </div>

      {/* Rating Filter */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold text-gray-700">
            Minimum Rating
          </label>
          <span className="text-sm font-bold text-yellow-500">
            ★ {filters.minRating.toFixed(1)}
          </span>
        </div>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleFilterChange("minRating", rating)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${
                filters.minRating === rating
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {rating === 0 ? "All" : `${rating}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Filter Buttons */}
      <div className="pt-4 border-t border-gray-200">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Quick Filters
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              handleFilterChange("maxPrice", 30)
            }
            className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-semibold hover:bg-green-100 transition"
          >
            Budget
          </button>
          <button
            onClick={() => {
              handleFilterChange("maxDistance", 2);
              handleFilterChange("minAvailability", 20);
            }}
            className="px-3 py-2 bg-blue-50 text-color-primary rounded-lg text-xs font-semibold hover:bg-blue-100 transition"
          >
            Nearby
          </button>
          <button
            onClick={() => handleFilterChange("minRating", 4)}
            className="px-3 py-2 bg-yellow-50 text-yellow-700 rounded-lg text-xs font-semibold hover:bg-yellow-100 transition"
          >
            Highly Rated
          </button>
          <button
            onClick={() => handleFilterChange("minAvailability", 50)}
            className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold hover:bg-purple-100 transition"
          >
            Available
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParkingFilters;
