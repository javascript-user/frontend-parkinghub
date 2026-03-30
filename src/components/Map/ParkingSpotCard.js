import React from "react";
import { FaStar, FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import useMapContext from "../../hooks/use-MapContext";

function ParkingSpotCard() {
  const { selectedSpot, setSelectedSpot } = useMapContext();

  if (!selectedSpot) return null;

  const availabilityPercentage =
    (selectedSpot.availability / selectedSpot.totalSpots) * 100;
  const availabilityColor =
    availabilityPercentage > 50
      ? "#10b981"
      : availabilityPercentage > 20
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:absolute lg:top-0 lg:left-0 lg:right-auto lg:bottom-auto lg:w-96 bg-white rounded-t-3xl lg:rounded-3xl shadow-2xl p-6 animate-slide-up lg:animate-none z-40">
      {/* Close Button */}
      <button
        onClick={() => setSelectedSpot(null)}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
      >
        <MdClose size={24} className="text-gray-600" />
      </button>

      {/* Header */}
      <div className="mb-6 pr-8">
        <h2 className="text-2xl font-bold text-color-dark mb-2">
          {selectedSpot.name}
        </h2>
        <div className="flex items-center gap-2 mb-3">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold text-gray-800">
            {selectedSpot.rating}
          </span>
          <span className="text-gray-500">
            ({selectedSpot.reviews} reviews)
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-color-primary" size={16} />
          <p className="text-sm">{selectedSpot.address}</p>
        </div>
      </div>

      {/* Key Info Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-color-light rounded-xl">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Price
          </p>
          <p className="text-xl font-bold text-color-primary">
            ₹{selectedSpot.price}
            <span className="text-xs font-normal text-gray-600">/hr</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Distance
          </p>
          <p className="text-xl font-bold text-color-primary">
            {selectedSpot.distance}
            <span className="text-xs font-normal text-gray-600"> km</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Available
          </p>
          <p className="text-xl font-bold text-color-secondary">
            {selectedSpot.availability}/{selectedSpot.totalSpots}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Hours
          </p>
          <p className="text-sm font-bold text-color-dark">24/7</p>
        </div>
      </div>

      {/* Availability Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold text-gray-700">Availability</p>
          <p className="text-sm font-bold text-color-primary">
            {availabilityPercentage.toFixed(0)}%
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-3 rounded-full transition-all duration-300"
            style={{
              width: `${availabilityPercentage}%`,
              backgroundColor: availabilityColor,
            }}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-6 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-color-primary text-white p-3 rounded-lg">
            <FaPhone size={16} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Phone
            </p>
            <p className="font-semibold text-gray-800">{selectedSpot.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-color-secondary text-white p-3 rounded-lg">
            <FaClock size={16} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Hours
            </p>
            <p className="font-semibold text-gray-800">{selectedSpot.hours}</p>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-3">Amenities</p>
        <div className="flex flex-wrap gap-2">
          {selectedSpot.amenities.map((amenity, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-color-light text-color-primary text-xs font-medium rounded-full border border-color-primary"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-color-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-200">
          Reserve Now
        </button>
        <button className="flex-1 border-2 border-color-primary text-color-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200">
          Get Directions
        </button>
      </div>

      {/* Safe Space for Scrolling */}
      <div className="h-4 lg:hidden"></div>
    </div>
  );
}

export default ParkingSpotCard;
