// Mock parking spots data for New Delhi area
const parkingSpots = [
  {
    id: 1,
    name: "Central Mall Parking",
    lat: 28.5494,
    lng: 77.1826,
    address: "Central Mall, Sangam Vihar, New Delhi",
    price: 50, // per hour
    availability: 45,
    totalSpots: 120,
    rating: 4.5,
    reviews: 128,
    amenities: ["24/7", "CCTV", "EV Charging", "Valet Service"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 0.5, // km
  },
  {
    id: 2,
    name: "Airport Express Parking",
    lat: 28.5566,
    lng: 77.1858,
    address: "Airport Road, New Delhi",
    price: 75,
    availability: 28,
    totalSpots: 200,
    rating: 4.2,
    reviews: 95,
    amenities: ["24/7", "CCTV", "Fast Exit"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 1.2,
  },
  {
    id: 3,
    name: "Business Park Garage",
    lat: 28.5350,
    lng: 77.1900,
    address: "Business Park, South Delhi",
    price: 40,
    availability: 89,
    totalSpots: 150,
    rating: 4.7,
    reviews: 203,
    amenities: ["24/7", "CCTV", "EV Charging", "Valet Service", "Restaurant"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 2.1,
  },
  {
    id: 4,
    name: "Downtown Plaza",
    lat: 28.5610,
    lng: 77.1750,
    address: "Downtown Plaza, Central Delhi",
    price: 60,
    availability: 12,
    totalSpots: 80,
    rating: 4.3,
    reviews: 156,
    amenities: ["24/7", "CCTV", "Shopping Mall Access"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 0.8,
  },
  {
    id: 5,
    name: "Tech Hub Parking",
    lat: 28.5432,
    lng: 77.1920,
    address: "Tech Hub Complex, Delhi",
    price: 45,
    availability: 67,
    totalSpots: 180,
    rating: 4.4,
    reviews: 178,
    amenities: ["24/7", "CCTV", "EV Charging", "WiFi"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 1.5,
  },
  {
    id: 6,
    name: "Hospital Parking",
    lat: 28.5290,
    lng: 77.1770,
    address: "Apollo Hospital, South Delhi",
    price: 30,
    availability: 34,
    totalSpots: 100,
    rating: 4.1,
    reviews: 89,
    amenities: ["24/7", "Quick Access", "Disabled Friendly"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 2.3,
  },
  {
    id: 7,
    name: "Metro Station Parking",
    lat: 28.5521,
    lng: 77.1690,
    address: "Kasturba Nagar Metro Station",
    price: 20,
    availability: 156,
    totalSpots: 250,
    rating: 4.0,
    reviews: 321,
    amenities: ["Metro Access", "24/7", "Affordable"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 1.8,
  },
  {
    id: 8,
    name: "Retail Complex Parking",
    lat: 28.5378,
    lng: 77.2010,
    address: "Retail Complex, East Delhi",
    price: 35,
    availability: 76,
    totalSpots: 140,
    rating: 4.6,
    reviews: 234,
    amenities: ["24/7", "CCTV", "EV Charging", "Shopping"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 2.5,
  },
  {
    id: 9,
    name: "Residential Complex A",
    lat: 28.5464,
    lng: 77.1640,
    address: "Residential Complex, South Delhi",
    price: 25,
    availability: 45,
    totalSpots: 120,
    rating: 4.2,
    reviews: 112,
    amenities: ["Secure", "Covered", "Residents Priority"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 2.8,
  },
  {
    id: 10,
    name: "Premium Club Parking",
    lat: 28.5340,
    lng: 77.1590,
    address: "Premium Club, New Delhi",
    price: 80,
    availability: 8,
    totalSpots: 50,
    rating: 4.8,
    reviews: 67,
    amenities: ["Luxury", "Valet Service", "CCTV", "Exclusive"],
    hours: "24/7",
    phone: "+91-9560875675",
    distance: 3.2,
  },
];

export const getParkingSpots = () => parkingSpots;

export const filterParkingSpots = (spots, filters) => {
  return spots.filter((spot) => {
    if (filters.minPrice && spot.price < filters.minPrice) return false;
    if (filters.maxPrice && spot.price > filters.maxPrice) return false;
    if (filters.minAvailability && spot.availability < filters.minAvailability) return false;
    if (filters.maxDistance && spot.distance > filters.maxDistance) return false;
    if (filters.minRating && spot.rating < filters.minRating) return false;
    return true;
  });
};

export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
};
