const downloadStaticData = async (operator: string) => {
  const apiKey = process.env.REACT_APP_SL_API_KEY; // Hämtar API-nyckeln från .env-filen
  const baseUrl = "https://opendata.samtrafiken.se/gtfs/";
  const url = `${baseUrl}${operator}/${operator}.zip?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.blob();
    // Här kan du antingen ladda ner blobben som en fil eller hantera den på något sätt.
    return data;
  } catch (error) {
    console.error("Det gick inte att hämta GTFS-data", error);
  }
};

export default downloadStaticData;
