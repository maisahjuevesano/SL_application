import {
  RealtimeDeparturesResponse,
  SLDeparturesData,
} from "../models/ApiResponse";

export const fetchRealtimeDepartures = async (
  siteId: string
): Promise<SLDeparturesData | null> => {
  const apiKey = "472c5da07a7a420b8ea098d8a4cd3ffd";
  // const apiKey = process.env.REACT_APP_API_KEY_FETCH_REALTIME_DEPARTURES;
  const timeWindow = "60";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `${proxyUrl}https://api.sl.se/api2/realtimedeparturesV4.json?key=${apiKey}&siteid=${siteId}&timewindow=${timeWindow}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    const data: RealtimeDeparturesResponse = await response.json();

    if (data.StatusCode === 0) {
      const transformedData: SLDeparturesData = {
        Buses: data.ResponseData.Buses.map((bus) => ({
          Destination: bus.Destination,
          DisplayTime: bus.DisplayTime,
        })),
      };

      return transformedData;
    }

    console.error("Fel i API-svaret: ", data.Message);
    return null;
  } catch (error) {
    console.error("Fel vid hämtning av realtidsavgångar", error);
    return null;
  }
};
