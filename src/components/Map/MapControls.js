import React, { useState } from "react";
import {
  MdGpsFixed,
  MdFilterAlt,
  MdLayers,
  MdSearchOff,
} from "react-icons/md";
import { useMap } from "react-leaflet";
import useMapContext from "../../hooks/use-MapContext";

function MapControls({ onToggleSidebar, isFiltersOpen }) {
  const map = useMap();
  const { setLocation, selectedSpot, setSelectedSpot, setRoutes } = useMapContext();
  const [mapStyle, setMapStyle] = useState("standard");

  // Center map on user location
  const handleCenterMap = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          map.setView([latitude, longitude], 15);
        });
      } else {
        console.log("Geolocation not supported");
      }
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  // Clear selected spot and routes
  const handleClear = () => {
    setSelectedSpot(null);
    setRoutes([]);
  };

  // Toggle map styles (for future enhancement)
  const handleToggleMapStyle = () => {
    const newStyle = mapStyle === "standard" ? "satellite" : "standard";
    setMapStyle(newStyle);
    // TODO: Implement map style switching
  };

  // Zoom in
  const handleZoomIn = () => {
    map.zoomIn();
  };

  // Zoom out
  const handleZoomOut = () => {
    map.zoomOut();
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* Zoom Controls */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <button
          onClick={handleZoomIn}
          className="p-3 hover:bg-color-light text-color-primary transition flex items-center justify-center"
          title="Zoom In"
        >
          <span className="text-2xl font-bold">+</span>
        </button>
        <div className="h-px bg-gray-200"></div>
        <button
          onClick={handleZoomOut}
          className="p-3 hover:bg-color-light text-color-primary transition flex items-center justify-center"
          title="Zoom Out"
        >
          <span className="text-2xl font-bold">−</span>
        </button>
      </div>

      {/* Action Controls */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
        {/* Center Map */}
        <button
          onClick={handleCenterMap}
          className="p-3 hover:bg-color-light text-color-primary transition flex items-center justify-center"
          title="Center on My Location"
        >
          <MdGpsFixed size={24} />
        </button>

        <div className="h-px bg-gray-200"></div>

        {/* Clear Selection */}
        {selectedSpot && (
          <>
            <button
              onClick={handleClear}
              className="p-3 hover:bg-red-50 text-red-500 transition flex items-center justify-center"
              title="Clear Selection"
            >
              <MdSearchOff size={24} />
            </button>
            <div className="h-px bg-gray-200"></div>
          </>
        )}

        {/* Toggle Sidebar */}
        <button
          onClick={onToggleSidebar}
          className={`p-3 transition flex items-center justify-center ${
            isFiltersOpen
              ? "bg-color-primary text-white"
              : "hover:bg-color-light text-color-primary"
          }`}
          title="Toggle Filters"
        >
          <MdFilterAlt size={24} />
        </button>

        <div className="h-px bg-gray-200"></div>

        {/* Map Style Toggle */}
        <button
          onClick={handleToggleMapStyle}
          className="p-3 hover:bg-color-light text-color-primary transition flex items-center justify-center"
          title={`Switch to ${mapStyle === "standard" ? "satellite" : "standard"} view`}
        >
          <MdLayers size={24} />
        </button>
      </div>

      {/* Info Label */}
      <div className="text-xs text-gray-500 text-center max-w-xs bg-white rounded px-3 py-2 shadow">
        {selectedSpot ? (
          <>
            <p className="font-semibold text-gray-700">{selectedSpot.name}</p>
            <p>₹{selectedSpot.price}/hr • {selectedSpot.availability} spots</p>
          </>
        ) : (
          <p>Click on parking spots to view details</p>
        )}
      </div>
    </div>
  );
}

export default MapControls;
