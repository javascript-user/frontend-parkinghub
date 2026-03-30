import React, { useState } from "react";
import {
  FaStar,
  FaPhone,
  FaClock,
  FaMapMarkerAlt,
  FaWifi,
  FaCamera,
  FaChargingStation,
  FaParking,
  FaCheck,
} from "react-icons/fa";
import { MdClose, MdEventAvailable } from "react-icons/md";
import useMapContext from "../../hooks/use-MapContext";

function ParkingDetailModal() {
  const { selectedSpot, setSelectedSpot } = useMapContext();
  const [activeTab, setActiveTab] = useState("overview");
  const [isBooked, setIsBooked] = useState(false);

  if (!selectedSpot) return null;

  const availabilityPercentage =
    (selectedSpot.availability / selectedSpot.totalSpots) * 100;

  // Map amenities to icons
  const amenityIcons = {
    "24/7": <FaClock className="text-color-primary" />,
    CCTV: <FaCamera className="text-color-primary" />,
    "EV Charging": <FaChargingStation className="text-color-primary" />,
    "Valet Service": <FaParking className="text-color-primary" />,
    WiFi: <FaWifi className="text-color-primary" />,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center p-4 animate-fade-in">
      {/* Modal Container */}
      <div className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-screen md:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-color-primary to-blue-900 text-white p-6 rounded-t-3xl md:rounded-t-3xl flex justify-between items-start z-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">{selectedSpot.name}</h2>
            <div className="flex items-center gap-2 mb-2">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold text-lg">{selectedSpot.rating}</span>
              <span className="text-gray-200">({selectedSpot.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt size={16} />
              <p className="text-sm">{selectedSpot.address}</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedSpot(null)}
            className="p-2 hover:bg-blue-800 rounded-lg transition"
          >
            <MdClose size={28} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-gray-200 sticky top-[140px] bg-white z-10">
          {["overview", "amenities", "reviews", "booking"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-4 py-4 font-semibold transition capitalize ${
                activeTab === tab
                  ? "text-color-primary border-b-2 border-color-primary"
                  : "text-gray-600 border-b-2 border-transparent hover:text-color-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-color-light rounded-lg text-center">
                  <p className="text-gray-500 text-sm mb-1">Price</p>
                  <p className="text-2xl font-bold text-color-primary">
                    ₹{selectedSpot.price}
                  </p>
                  <p className="text-xs text-gray-500">per hour</p>
                </div>
                <div className="p-4 bg-color-light rounded-lg text-center">
                  <p className="text-gray-500 text-sm mb-1">Available</p>
                  <p className="text-2xl font-bold text-color-secondary">
                    {selectedSpot.availability}
                  </p>
                  <p className="text-xs text-gray-500">spots</p>
                </div>
                <div className="p-4 bg-color-light rounded-lg text-center">
                  <p className="text-gray-500 text-sm mb-1">Total</p>
                  <p className="text-2xl font-bold text-color-dark">
                    {selectedSpot.totalSpots}
                  </p>
                  <p className="text-xs text-gray-500">capacity</p>
                </div>
                <div className="p-4 bg-color-light rounded-lg text-center">
                  <p className="text-gray-500 text-sm mb-1">Distance</p>
                  <p className="text-2xl font-bold text-color-primary">
                    {selectedSpot.distance}
                  </p>
                  <p className="text-xs text-gray-500">km away</p>
                </div>
              </div>

              {/* Availability Bar */}
              <div>
                <h3 className="font-bold text-lg mb-3">Current Availability</h3>
                <div className="flex gap-4 items-center mb-3">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="h-4 rounded-full bg-gradient-to-r from-color-primary to-color-secondary transition-all duration-300"
                        style={{ width: `${availabilityPercentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="font-bold text-lg text-color-primary">
                    {availabilityPercentage.toFixed(0)}%
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {selectedSpot.availability} out of {selectedSpot.totalSpots} spots available
                </p>
              </div>

              {/* Contact Info */}
              <div className="p-4 border border-gray-200 rounded-lg space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-color-primary text-lg flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold">{selectedSpot.phone}</p>
                  </div>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-color-primary text-lg flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">Hours</p>
                    <p className="font-semibold">{selectedSpot.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Amenities Tab */}
          {activeTab === "amenities" && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Available Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {selectedSpot.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-gray-200 rounded-lg flex items-center gap-3 hover:border-color-primary hover:bg-color-light transition"
                  >
                    {amenityIcons[amenity] || <FaCheck className="text-color-primary" />}
                    <span className="font-medium">{amenity}</span>
                  </div>
                ))}
              </div>

              {/* Additional Features */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg mt-4">
                <div className="flex items-start gap-3">
                  <FaCheck className="text-green-600 text-lg mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Premium Features</p>
                    <p className="text-sm text-green-700 mt-1">
                      Real-time availability tracking, instant booking confirmation, secure payment options
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <p className="text-4xl font-bold text-color-dark">
                    {selectedSpot.rating}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.round(selectedSpot.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Based on {selectedSpot.reviews} reviews
                  </p>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                {[
                  {
                    name: "Rajesh K.",
                    rating: 5,
                    comment: "Great parking space, very secure and clean!",
                    date: "2 days ago",
                  },
                  {
                    name: "Priya S.",
                    rating: 4,
                    comment: "Good location, bit far from entrance but nice.",
                    date: "1 week ago",
                  },
                  {
                    name: "Amit P.",
                    rating: 5,
                    comment: "Excellent valet service, highly recommended!",
                    date: "2 weeks ago",
                  },
                ].map((review, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-semibold">{review.name}</p>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rating
                              ? "text-yellow-400 text-sm"
                              : "text-gray-300 text-sm"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Booking Tab */}
          {activeTab === "booking" && (
            <div className="space-y-6">
              {isBooked ? (
                <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg text-center">
                  <MdEventAvailable className="text-green-600 text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    Booking Confirmed!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your parking spot is reserved. Check your email for details.
                  </p>
                  <div className="bg-white p-4 rounded-lg text-left space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spot:</span>
                      <span className="font-semibold">A-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Cost:</span>
                      <span className="font-semibold text-color-primary">
                        ₹{selectedSpot.price * 2}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsBooked(false)}
                    className="w-full bg-color-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    Book Another Spot
                  </button>
                </div>
              ) : (
                <>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      Quick reservation for your next visit to {selectedSpot.name}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Duration
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-primary">
                        <option>1 hour</option>
                        <option selected>2 hours</option>
                        <option>3 hours</option>
                        <option>4 hours</option>
                        <option>Full day (24h)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Car Type
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-primary">
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Hatchback</option>
                        <option>Compact</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Entry Date & Time
                      </label>
                      <input
                        type="datetime-local"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-color-primary"
                        defaultValue={new Date().toISOString().slice(0, 16)}
                      />
                    </div>

                    <div className="p-4 bg-color-light rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Rate:</span>
                        <span className="font-semibold">₹{selectedSpot.price}/hr</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">2 hours</span>
                      </div>
                      <div className="border-t border-gray-300 pt-2 flex justify-between items-center">
                        <span className="font-bold">Total:</span>
                        <span className="text-2xl font-bold text-color-primary">
                          ₹{selectedSpot.price * 2}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsBooked(true)}
                      className="w-full bg-color-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition text-lg"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ParkingDetailModal;
