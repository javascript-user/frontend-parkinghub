import { createContext, useState } from "react";

const MapContext = createContext();

function MapProvider({ children }) {
  const [location, setLocation] = useState({
    lat: 28.543828736324443,
    lng: 77.1786211200175,
  });
  const [waypoints, setWaypoints] = useState({});
  const data = { location, setLocation, waypoints, setWaypoints };
  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
}

export { MapProvider };
export default MapContext;
