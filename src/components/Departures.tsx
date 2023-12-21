import React, { useEffect, useState } from "react";
import { SLDeparturesData } from "../models/slDeparturesData";
import { fetchRealtimeDepartures } from "../services/fetchRealtimeDepartures";
import { fetchSiteId } from "../services/fetchSiteId";

export const Departures = () => {
  const [departuresData, setDeparturesData] = useState<SLDeparturesData | null>(
    null
  );
  const [searchString, setSearchString] = useState<string>("");
  const [searchedStation, setSearchStation] = useState<string>("");

  useEffect(() => {
    const savedStation = localStorage.getItem("searchedStation");
    const savedDeparturesData = localStorage.getItem("departuresData");

    if (savedStation) {
      setSearchStation(savedStation);
    }
    if (savedDeparturesData) {
      setDeparturesData(JSON.parse(savedDeparturesData));
    }
  }, []);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
  };

  const handleSearch = async () => {
    const siteId = await fetchSiteId(searchString);
    if (siteId) {
      const departures = await fetchRealtimeDepartures(siteId);
      setDeparturesData(departures);
      const capitalizedSearchString = capitalizeFirstLetter(searchString);
      setSearchStation(capitalizedSearchString);

      localStorage.setItem("searchedStation", capitalizedSearchString);
      localStorage.setItem("departuresData", JSON.stringify(departures));
      setSearchString("");
    }
  };

  const handleEnterSearch = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={handleEnterSearch}
        placeholder="Sök hållplats"
      />
      <button onClick={handleSearch}>Sök</button>

      {departuresData && (
        <div>
          {searchedStation && <h2>{searchedStation}</h2>}
          <ul>
            {departuresData.Buses.map((bus, index) => (
              <li key={index}>{`${bus.Destination} - ${bus.DisplayTime}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
