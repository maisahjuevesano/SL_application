import React, { useState } from "react";
import { SLDeparturesData } from "../models/slDeparturesData";
import { fetchRealtimeDepartures } from "../services/fetchRealtimeDepartures";
import { fetchSiteId } from "../services/fetchSiteId";

export const Departures = () => {
  const [departuresData, setDeparturesData] = useState<SLDeparturesData | null>(
    null
  );
  const [searchString, setSearchString] = useState<string>("");

  const handleSearch = async () => {
    const siteId = await fetchSiteId(searchString);
    if (siteId) {
      const departures = await fetchRealtimeDepartures(siteId);
      setDeparturesData(departures);
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
          <h3>Busstider</h3>
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
