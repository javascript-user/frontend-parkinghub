import React, { useState } from "react";
import { FaClock, FaRoad, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdDirections, MdClose } from "react-icons/md";
import useMapContext from "../../hooks/use-MapContext";

function RouteDetails() {
  const { selectedRoute, waypoints, setSelectedRoute } = useMapContext();
  const [expandedStep, setExpandedStep] = useState(null);

  if (!selectedRoute || !waypoints.end) return null;

  const { distance, time, estimatedCost, instructions } = selectedRoute;

  // Parse GraphHopper instructions
  const parseInstructions = (instructions) => {
    if (!instructions || instructions.length === 0) {
      return [
        {
          text: "Start your journey",
          distance: 0,
          time: 0,
        },
      ];
    }

    return instructions.map((instruction) => ({
      text: instruction.text || "Continue",
      distance: (instruction.distance / 1000).toFixed(2),
      time: Math.round(instruction.time / 60000),
    }));
  };

  const steps = parseInstructions(instructions);

  return (
    <div className="fixed top-0 right-0 bottom-0 w-full md:w-96 bg-white rounded-l-3xl md:rounded-3xl shadow-2xl flex flex-col z-40 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-color-primary to-blue-900 rounded-t-3xl md:rounded-t-3xl">
        <div className="flex items-center gap-3">
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <MdDirections className="text-white text-2xl" />
          </div>
          <h2 className="text-xl font-bold text-white">Route Details</h2>
        </div>
        <button
          onClick={() => setSelectedRoute(null)}
          className="p-2 hover:bg-blue-800 rounded-lg transition text-white"
        >
          <MdClose size={24} />
        </button>
      </div>

      {/* Route Summary */}
      <div className="p-6 bg-color-light border-b border-gray-200">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaRoad className="text-color-primary" size={20} />
            </div>
            <p className="text-2xl font-bold text-color-dark">{distance}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">km</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaClock className="text-color-secondary" size={20} />
            </div>
            <p className="text-2xl font-bold text-color-dark">{time}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">minutes</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-color-primary font-bold text-2xl">₹</span>
            </div>
            <p className="text-2xl font-bold text-color-dark">{estimatedCost}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">estimate</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 p-6 border-b border-gray-200">
        <button className="flex-1 bg-color-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2">
          <MdDirections size={20} />
          Start Navigation
        </button>
        <button className="px-4 py-3 border-2 border-color-primary text-color-primary rounded-lg font-semibold hover:bg-blue-50 transition">
          Share
        </button>
      </div>

      {/* Turn-by-Turn Directions */}
      <div className="flex-1 overflow-y-auto p-6">
        <h3 className="font-bold text-lg text-color-dark mb-4">Turn-by-Turn</h3>
        <div className="space-y-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-color-primary transition"
            >
              <button
                onClick={() =>
                  setExpandedStep(expandedStep === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 hover:bg-color-light transition"
              >
                <div className="flex items-start gap-3 flex-1 text-left">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-color-primary text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-color-dark">{step.text}</p>
                    {step.distance > 0 && (
                      <p className="text-sm text-gray-500 mt-1">
                        {step.distance} km
                        {step.time > 0 && ` • ${step.time} min`}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  {expandedStep === index ? (
                    <FaChevronUp className="text-color-primary" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </div>
              </button>

              {expandedStep === index && (
                <div className="bg-color-light p-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{step.text}</p>
                  {step.distance > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-300 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Distance:</span>
                        <span className="font-semibold text-color-dark">
                          {step.distance} km
                        </span>
                      </div>
                      {step.time > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-semibold text-color-dark">
                            {step.time} min
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arrival Info */}
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Estimated Arrival</p>
          <p className="text-lg font-bold text-green-700">
            {new Date(Date.now() + time * 60000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RouteDetails;
