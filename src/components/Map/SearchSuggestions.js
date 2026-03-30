import React, { useState, useEffect } from "react";
import { FaClock, FaHeart, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import useMapContext from "../../hooks/use-MapContext";

function SearchSuggestions({ isOpen, onClose }) {
  const { recentSearches, addRecentSearch, parkingSpots } = useMapContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = parkingSpots.filter(
        (spot) =>
          spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          spot.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, parkingSpots]);

  const handleSelectSpot = (spot) => {
    addRecentSearch(spot.name);
    setSearchQuery("");
    setSuggestions([]);
  };

  const toggleFavorite = (spotName) => {
    setFavorites((prev) =>
      prev.includes(spotName) ? prev.filter((s) => s !== spotName) : [...prev, spotName]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-center pt-20 md:pt-0 md:items-center p-4">
      {/* Search Panel */}
      <div className="bg-white rounded-2xl w-full md:max-w-lg shadow-2xl max-h-[80vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-color-primary to-blue-900 text-white p-6 flex items-center gap-3 justify-between">
          <div className="flex items-center gap-3 flex-1">
            <FaSearch size={20} />
            <input
              type="text"
              placeholder="Search parking locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-blue-800 text-white placeholder-blue-200 outline-none flex-1 text-lg"
              autoFocus
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-800 rounded-lg transition"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Search Results */}
          {searchQuery && suggestions.length > 0 && (
            <div>
              <h3 className="font-bold text-lg text-color-dark mb-3">
                Search Results ({suggestions.length})
              </h3>
              <div className="space-y-2">
                {suggestions.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => handleSelectSpot(spot)}
                    className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-color-primary hover:bg-color-light transition flex items-start gap-3"
                  >
                    <FaMapMarkerAlt className="text-color-primary mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-color-dark">{spot.name}</p>
                      <p className="text-sm text-gray-500">{spot.address}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs bg-color-light text-color-primary px-2 py-1 rounded">
                          ₹{spot.price}/hr
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {spot.availability} available
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(spot.name);
                      }}
                      className="text-xl transition"
                    >
                      {favorites.includes(spot.name) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaHeart className="text-gray-300 hover:text-red-300" />
                      )}
                    </button>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {searchQuery && suggestions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-2">No parking spots found for "{searchQuery}"</p>
              <p className="text-sm text-gray-400">Try a different search term or location</p>
            </div>
          )}

          {/* Recent Searches */}
          {!searchQuery && recentSearches.length > 0 && (
            <div>
              <h3 className="font-bold text-lg text-color-dark mb-3 flex items-center gap-2">
                <FaClock size={18} className="text-color-secondary" />
                Recent Searches
              </h3>
              <div className="space-y-2">
                {recentSearches.map((search, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSearchQuery(search);
                      addRecentSearch(search);
                    }}
                    className="w-full p-3 text-left border border-gray-200 rounded-lg hover:border-color-primary hover:bg-color-light transition flex items-center gap-3 group"
                  >
                    <FaClock className="text-gray-400 group-hover:text-color-secondary" />
                    <span className="text-color-dark font-medium flex-1">{search}</span>
                    <span className="text-xs text-gray-400">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Favorites */}
          {!searchQuery && favorites.length > 0 && (
            <div>
              <h3 className="font-bold text-lg text-color-dark mb-3 flex items-center gap-2">
                <FaHeart size={18} className="text-red-500" />
                Favorites
              </h3>
              <div className="space-y-2">
                {parkingSpots
                  .filter((spot) => favorites.includes(spot.name))
                  .slice(0, 5)
                  .map((spot) => (
                    <button
                      key={spot.id}
                      onClick={() => handleSelectSpot(spot)}
                      className="w-full p-3 text-left border border-red-200 rounded-lg hover:bg-red-50 transition flex items-start gap-3"
                    >
                      <FaHeart className="text-red-500 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-color-dark">{spot.name}</p>
                        <p className="text-sm text-gray-500">{spot.address}</p>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Quick Stats */}
          {!searchQuery && recentSearches.length === 0 && favorites.length === 0 && (
            <div className="p-4 bg-color-light rounded-lg text-center">
              <p className="text-color-dark font-semibold mb-2">Find Your Perfect Parking Spot</p>
              <p className="text-sm text-gray-600">
                Start typing to search for parking locations, view recent searches, or manage your favorites.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-2xl font-bold text-color-primary">
                    {parkingSpots.length}
                  </p>
                  <p className="text-xs text-gray-600">Spots Available</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-color-secondary">24/7</p>
                  <p className="text-xs text-gray-600">Open Hours</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-yellow-500">4.4</p>
                  <p className="text-xs text-gray-600">Avg Rating</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchSuggestions;
