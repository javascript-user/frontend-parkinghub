import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import polyline from "@mapbox/polyline";
import useMapContext from "../../hooks/use-MapContext";

function RoutingMachine({ waypoints }) {
  const map = useMap();
  const { setRoutes, setSelectedRoute } = useMapContext();
  const [routeLayers, setRouteLayers] = useState([]);

  useEffect(() => {
    if (!map) return;

    const { start, end } = waypoints;

    // Clear previous layers
    routeLayers.forEach((layer) => {
      try {
        map.removeLayer(layer);
      } catch (e) {
        // Layer already removed
      }
    });

    const fetchRoute = async () => {
      const url = `https://graphhopper.com/api/1/route?point=${start.lat},${start.lng}&point=${end.lat},${end.lng}&vehicle=car&locale=en&ch.disable=true&key=${process.env.REACT_APP_GRAPH_HOPPER_API_KEY}`;

      try {
        const { data } = await axios.get(url);

        if (!data.paths || !data.paths[0]) throw new Error("No route found");

        // Get up to 3 route options if available
        const routes = [];
        const pathCount = Math.min(data.paths.length, 3);

        for (let i = 0; i < pathCount; i++) {
          const routeData = data.paths[i];
          const routePolyline = routeData.points;

          // Decode the polyline
          const decodedRoute = polyline.decode(routePolyline);

          // Calculate route details
          const distance = (routeData.distance / 1000).toFixed(2); // Convert to km
          const time = Math.round(routeData.time / 60000); // Convert to minutes
          const estimatedCost = Math.round(distance * 15); // Assume 15 per km

          const routeInfo = {
            distance,
            time,
            estimatedCost,
            instructions: routeData.instructions || [],
            points: decodedRoute,
            index: i
          };

          routes.push(routeInfo);
        }

        // Add the primary route to map
        const primaryRoute = routes[0];
        const decodedRoute = primaryRoute.points;

        // Add polyline to map with modern styling
        const polylineLayer = L.polyline(decodedRoute, {
          color: "#1e3a8a",
          weight: 5,
          opacity: 0.8,
          lineCap: "round",
          lineJoin: "round",
          dashArray: "0",
        }).addTo(map);

        // Add gradient effect markers at key points
        const startPoint = decodedRoute[0];
        const endPoint = decodedRoute[decodedRoute.length - 1];

        // Custom start marker
        const startMarker = L.marker(startPoint, {
          icon: L.divIcon({
            html: `
              <div style="
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                border-radius: 50%;
                border: 3px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              ">
                <span style="color: white; font-weight: bold; font-size: 20px;">S</span>
              </div>
            `,
            className: "start-marker",
            iconSize: [40, 40],
            iconAnchor: [20, 20],
          }),
        }).addTo(map);

        // Custom end marker
        const endMarker = L.marker(endPoint, {
          icon: L.divIcon({
            html: `
              <div style="
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                border-radius: 50%;
                border: 3px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              ">
                <span style="color: white; font-weight: bold; font-size: 20px;">E</span>
              </div>
            `,
            className: "end-marker",
            iconSize: [40, 40],
            iconAnchor: [20, 20],
          }),
        }).addTo(map);

        // Store layers for cleanup
        setRouteLayers([polylineLayer, startMarker, endMarker]);

        setRoutes(routes);
        setSelectedRoute(routes[0]);

        // Fit map to route bounds
        const bounds = L.latLngBounds(decodedRoute);
        map.fitBounds(bounds, { padding: [50, 50] });
      } catch (error) {
        console.error("Error fetching route from GraphHopper:", error);
      }
    };

    fetchRoute();

    return () => {
      routeLayers.forEach((layer) => {
        try {
          map.removeLayer(layer);
        } catch (e) {
          // Layer already removed
        }
      });
    };
  }, [map, waypoints, setRoutes, setSelectedRoute]);

  return null;
}

export default RoutingMachine;
