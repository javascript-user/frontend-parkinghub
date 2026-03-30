import { useEffect, useState } from "react";
import { calculateDistance } from "../api/parkingSpots";

export function useLocationAwareness() {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get user's current location
  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setLoading(false);
      },
      (err) => {
        setError(err.message || "Unable to retrieve your location");
        setLoading(false);
      }
    );
  };

  // Calculate distance from user to a spot
  const getDistanceToSpot = (spot) => {
    if (!userLocation) return null;
    return calculateDistance(userLocation.lat, userLocation.lng, spot.lat, spot.lng);
  };

  // Get nearby spots
  const getNearbySpots = (spots, radiusKm = 5) => {
    if (!userLocation) return [];
    return spots
      .map((spot) => ({
        ...spot,
        distanceFromUser: getDistanceToSpot(spot),
      }))
      .filter((spot) => spot.distanceFromUser <= radiusKm)
      .sort((a, b) => a.distanceFromUser - b.distanceFromUser);
  };

  // Watch user location (continuous updates)
  const watchLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    return navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (err) => {
        setError(err.message || "Error watching location");
      }
    );
  };

  return {
    userLocation,
    setUserLocation,
    loading,
    error,
    getCurrentLocation,
    getDistanceToSpot,
    getNearbySpots,
    watchLocation,
  };
}
