import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Input from "../common/Input.js";
import Icon from "../common/Icon.js";
import { IoIosSearch } from "react-icons/io";
import useMapContext from "../../hooks/use-MapContext.js";
import forwardGeocode from "../../api/ForwardGeocode.js";
import ParkingFilters from "./ParkingFilters.js";
import ParkingSpotCard from "./ParkingSpotCard.js";
import { filterParkingSpots } from "../../api/parkingSpots.js";

export default function MapSideBar({ isOpen, setIsOpen }) {
  const ref = useRef(null);
  const { setWaypoints, setLocation, parkingSpots, filters, selectedSpot, favorites, toggleFavorite, isFavorite } = useMapContext();
  const [path, setPath] = useState({ start: "", end: "" });
  const [filteredResults, setFilteredResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPath({
      ...path,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    forwardGeocode(path.start).then((start) => {
      setLocation({ ...start });
      setWaypoints((prev) => {
        return { ...prev, start: { ...start } };
      });
    });

    forwardGeocode(path.end).then((end) =>
      setWaypoints((prev) => {
        return { ...prev, end: { ...end } };
      })
    );
  };

  // Update filtered results when filters change
  useEffect(() => {
    const results = filterParkingSpots(parkingSpots, filters);
    setFilteredResults(results.slice(0, 6)); // Show top 6 results
  }, [filters, parkingSpots]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <>
      {isOpen && (
        <aside
          ref={ref}
          className="h-screen w-full md:w-96 absolute z-50 left-0 bg-white flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-r from-color-primary to-blue-900">
            <h2 className="text-xl font-bold text-white">Find Parking</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-blue-800 rounded-lg transition text-white"
            >
              <MdClose size={24} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {/* Search Form */}
            <form
              className="mb-6 p-4 bg-color-light rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="space-y-3 mb-4">
                <Input
                  name={"start"}
                  onChange={handleChange}
                  value={path.start}
                  className={"text-sm py-3 rounded-lg border-gray-300"}
                  placeholder={"Starting point"}
                />
                <Input
                  name={"end"}
                  onChange={handleChange}
                  value={path.end}
                  className={"text-sm py-3 rounded-lg border-gray-300"}
                  placeholder={"Destination"}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-color-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
              >
                <IoIosSearch size={20} />
                Search Route
              </button>
            </form>

            {/* Filters */}
            <ParkingFilters />

            {/* Results List */}
            {!selectedSpot && (
              <div>
                <h3 className="font-bold text-lg text-color-dark mb-4">
                  Available Spots ({filteredResults.length})
                </h3>
                <div className="space-y-3">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((spot) => (
                      <div
                        key={spot.id}
                        className="p-4 border border-gray-200 rounded-lg hover:border-color-primary hover:shadow-md transition cursor-pointer bg-white group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-color-dark flex-1">
                            {spot.name}
                          </h4>
                          <button
                            onClick={() => toggleFavorite(spot.id)}
                            className="text-xl opacity-0 group-hover:opacity-100 transition"
                          >
                            {isFavorite(spot.id) ? "❤️" : "🤍"}
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                          <div>
                            <p className="text-gray-500 text-xs">Price</p>
                            <p className="font-bold text-color-primary">
                              ₹{spot.price}/hr
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Available</p>
                            <p className="font-bold text-color-secondary">
                              {spot.availability}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Distance</p>
                            <p className="font-bold text-color-primary">
                              {spot.distance} km
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs">Rating</p>
                            <p className="font-bold text-yellow-500">
                              ★ {spot.rating}
                            </p>
                          </div>
                        </div>
                        <button className="w-full bg-color-light text-color-primary py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition">
                          View Details
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-gray-500">
                      <p>No parking spots match your filters.</p>
                      <p className="text-sm mt-2">Try adjusting your filters.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      )}

      {/* Parking Spot Details Card */}
      {selectedSpot && <ParkingSpotCard />}
    </>
  );
}
