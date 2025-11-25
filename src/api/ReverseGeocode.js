import axios from "axios";

const API_KEY = REACT_APP_GEOCODING_API_KEY; 

async function reverseGeocode(lat, lng) {
    try {
      const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
        params: {
          key: API_KEY,
          q: `${lat},${lng}`, // Pass the latitude and longitude
          limit: 1,
        },
      });
  
      const data = response.data;
      if (data.results.length > 0) {
        const formattedAddress = data.results[0].formatted;
        console.log(`Address for coordinates ${lat}, ${lng}: ${formattedAddress}`);
        return formattedAddress;
      } else {
        console.log('No results found.');
      }
    } catch (error) {
      console.error('Error fetching reverse geocode:', error.message);
    }
  }
  
  // Example usage:
export default reverseGeocode;
  