import React from "react";
import { MarkerClusterGroup } from "react-leaflet-cluster";
import L from "leaflet";
import ParkingMarker from "./ParkingMarker";
import { filterParkingSpots } from "../../api/parkingSpots";
import useMapContext from "../../hooks/use-MapContext";

function ParkingCluster() {
  const { parkingSpots, filters } = useMapContext();

  // Apply filters to parking spots
  const filteredSpots = filterParkingSpots(parkingSpots, filters);

  const iconCreateFunction = (cluster) => {
    const count = cluster.getChildCount();
    const size =
      count < 10 ? 32 : count < 50 ? 40 : 48;

    return L.divIcon({
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${size}px;
          height: ${size}px;
          background: linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
          font-weight: bold;
          color: white;
          font-size: ${count < 10 ? 14 : 16}px;
        ">
          ${count}
        </div>
      `,
      className: "cluster-marker",
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
    });
  };

  return (
    <MarkerClusterGroup
      chunkedLoading
      maxClusterRadius={50}
      iconCreateFunction={iconCreateFunction}
    >
      {filteredSpots.map((spot) => (
        <ParkingMarker key={spot.id} spot={spot} />
      ))}
    </MarkerClusterGroup>
  );
}

export default ParkingCluster;
