import axios from "axios";

async function forwardGeocode(address) {
  if (!address || address.trim() === "") {
    alert("Please enter a valid address.");
    return;
  }

  const API_KEY = process.env.REACT_APP_GEOCODING_API_KEY;

  try {
    const response = await axios.get(
      "https://api.opencagedata.com/geocode/v1/json",
      {
        params: {
          key: API_KEY,
          q: address,
          limit: 1, // Limits the number of results (1 is usually sufficient)
        },
      }
    );

    const data = response.data;
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      // console.log(`Coordinates for ${address}: ${lat}, ${lng}`);
      return { lat, lng };
    } else {
      console.log("No results found.");
    }
  } catch (error) {
    console.error("Error fetching forward geocode:", error.message);
  }
}

export default forwardGeocode;
