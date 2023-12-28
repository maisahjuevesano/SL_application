import { TripResponse } from "../models/travelService";

const API_BASE_URL = "https://api.resrobot.se/v2.1";

const getTrip = async (
  originId: string,
  destId: string,
  apiKey: string
): Promise<TripResponse> => {
  const url = new URL(`${API_BASE_URL}/trip`);
  url.search = new URLSearchParams({
    format: "json",
    originId,
    destId,
    passlist: "true",
    showPassingPoints: "true",
    accessId: apiKey,
  }).toString();

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as TripResponse;
  } catch (error) {
    console.error("Error fetching trip data:", error);
    throw error;
  }
};

export { getTrip };
