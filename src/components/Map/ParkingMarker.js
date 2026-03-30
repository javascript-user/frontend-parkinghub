import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import useMapContext from "../../hooks/use-MapContext";

// Create custom parking marker icon
const createParkingIcon = (isSelected = false) => {
  const html = `
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: ${isSelected ? "#0d9488" : "#1e3a8a"};
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: all 0.3s ease;
    ">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M17 18a5 5 0 1 0-10 0"/>
        <circle cx="12" cy="9" r="7"/>
      </svg>
    </div>
  `;

  return new L.DivIcon({
    html,
    className: "parking-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

function ParkingMarker({ spot }) {
  const { selectedSpot, setSelectedSpot } = useMapContext();
  const isSelected = selectedSpot?.id === spot.id;

  const handleMarkerClick = () => {
    setSelectedSpot(spot);
  };

  const availabilityPercentage = (spot.availability / spot.totalSpots) * 100;
  const availabilityColor =
    availabilityPercentage > 50
      ? "#10b981"
      : availabilityPercentage > 20
      ? "#f59e0b"
      : "#ef4444";

  return (
    <Marker
      position={[spot.lat, spot.lng]}
      icon={createParkingIcon(isSelected)}
      eventHandlers={{
        click: handleMarkerClick,
      }}
    >
      <Popup className="parking-popup" closeButton={true}>
        <div className="w-64 p-0">
          <div className="bg-gradient-to-r from-color-primary to-blue-900 text-white p-3 rounded-t-lg">
            <h3 className="font-bold text-lg">{spot.name}</h3>
            <p className="text-sm text-gray-200">{spot.address}</p>
          </div>
          <div className="p-4 bg-white rounded-b-lg">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Price</p>
                <p className="text-lg font-bold text-color-primary">₹{spot.price}/hr</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Distance</p>
                <p className="text-lg font-bold text-color-primary">{spot.distance} km</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Available</p>
                <p className="text-lg font-bold text-color-secondary">
                  {spot.availability}/{spot.totalSpots}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">Rating</p>
                <p className="text-lg font-bold text-color-primary">★ {spot.rating}</p>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-600">Availability</span>
                <span className="font-bold">{availabilityPercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${availabilityPercentage}%`,
                    backgroundColor: availabilityColor,
                  }}
                />
              </div>
            </div>

            <div className="mb-3">
              <p className="text-xs text-gray-600 mb-2">Amenities:</p>
              <div className="flex flex-wrap gap-1">
                {spot.amenities.slice(0, 3).map((amenity, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-color-light text-color-primary px-2 py-1 rounded-full"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleMarkerClick}
              className="w-full bg-color-primary text-white py-2 px-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-200"
            >
              View Details
            </button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default ParkingMarker;
