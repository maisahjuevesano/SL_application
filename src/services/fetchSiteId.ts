import { TypeaheadAPIResponse } from "../models/TypeadheadApiResponse";

export const fetchSiteId = async (
  searchString: string
): Promise<string | null> => {
  const apiKey = import.meta.env.VITE_API_KEY_FETCH_SITE_ID;
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const apiUrl = `${proxyUrl}https://journeyplanner.integration.sl.se/v1/typeahead.json?key=${apiKey}&searchstring=s=${encodeURIComponent(
    searchString
  )}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    const data: TypeaheadAPIResponse = await response.json();

    if (data.StatusCode === 0 && data.ResponseData.length > 0) {
      return data.ResponseData[0].SiteId;
    }

    return null;
  } catch (error) {
    console.error("Fel vid hämtning av siteId", error);
    return null;
  }
};
