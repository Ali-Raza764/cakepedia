import axios from "axios";

// Create a cache object to store responses
const responseCache = {};

const Fetch = async (req) => {
  // Check if the response is already in the cache
  if (responseCache[req]) {
    console.log("Returning cached response");
    return responseCache[req];
  }

  const options = {
    method: "GET",
    url: ("https://the-birthday-cake-db.p.rapidapi.com/" + req),
    headers: {
      'X-RapidAPI-Key': 'd40c265118mshdc90194a533aa99p18842bjsn18247c206e8e',
      'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    
    // Cache the response
    responseCache[req] = response;
    
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default Fetch;
