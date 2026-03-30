import { createContext, useState } from "react";
import { getParkingSpots } from "../api/parkingSpots";

const MapContext = createContext();

function MapProvider({ children }) {
  const [location, setLocation] = useState({
    lat: 28.543828736324443,
    lng: 77.1786211200175,
  });
  const [waypoints, setWaypoints] = useState({});
  const [parkingSpots] = useState(getParkingSpots());
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100,
    minAvailability: 0,
    maxDistance: 10,
    minRating: 0,
  });
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [mapZoom, setMapZoom] = useState(14);

  const addRecentSearch = (search) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s !== search);
      return [search, ...filtered].slice(0, 5);
    });
  };

  const toggleFavorite = (spotId) => {
    setFavorites((prev) => 
      prev.includes(spotId) 
        ? prev.filter((id) => id !== spotId)
        : [...prev, spotId]
    );
  };

  const isFavorite = (spotId) => favorites.includes(spotId);

  const data = {
    location,
    setLocation,
    waypoints,
    setWaypoints,
    parkingSpots,
    selectedSpot,
    setSelectedSpot,
    userLocation,
    setUserLocation,
    filters,
    setFilters,
    routes,
    setRoutes,
    selectedRoute,
    setSelectedRoute,
    recentSearches,
    addRecentSearch,
    favorites,
    toggleFavorite,
    isFavorite,
    mapZoom,
    setMapZoom,
  };

  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
}

export { MapProvider };
export default MapContext;
