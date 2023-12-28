import { TripResponse } from "../models/ApiTravelResponse";
const apiKey = import.meta.env.VITE_API_KEY_FETCH_TRAVEL_API;

const fetchTripData = async (
  originId: string,
  destId: string
): Promise<TripResponse> => {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const apiURL = `http://api.sl.se/api2/TravelplannerV3_1/trip.json?key=${apiKey}&originId=${originId}&destId=${destId}`;
  const url = corsProxy + apiURL;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return (await response.json()) as TripResponse;
  } catch (error) {
    console.error("Error fetching trip data:", error);
    throw error;
  }
};

export { fetchTripData };
