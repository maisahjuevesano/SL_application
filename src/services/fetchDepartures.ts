export const fetchDepartures = async () => {
  const apiKey = process.env.REACT_APP_API_KEY_FETCH_DEPARTURES;
  const siteId = "3710";
  const timeWindow = "60";

  // Använd cors-anywhere proxy för att kringgå CORS i utvecklingssyfte
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `${proxyUrl}https://api.sl.se/api2/realtimedeparturesV4.json?key=${apiKey}&siteid=${siteId}&timewindow=${timeWindow}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Requested-With": "XMLHttpRequest", // Nödvändig header för cors-anywhere
      },
    });
    const data = await response.json();
    return data.ResponseData;
  } catch (error) {
    console.error("Fel vid hämtning från SL API", error);
    return null;
  }
};

//temporär lösning https://cors-anywhere.herokuapp.com/corsdemo
