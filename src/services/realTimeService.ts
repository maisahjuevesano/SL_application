export interface RealTimeDeparture {
  destination: string;
  line: string;
  departureTime: string;
}

export const fetchRealTimeDepartures = async (
  siteId: string
): Promise<RealTimeDeparture[]> => {
  const apiKey = process.env.REACT_APP_SL_API_KEY as string;
  const url = `https://api.sl.se/api2/realtimedeparturesV4.json?key=${apiKey}&siteid=${siteId}&timewindow=30`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data.ResponseData.Buses;
};
