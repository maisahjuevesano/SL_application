import { useState } from "react";
import { SLDeparturesData } from "../models/slDeparturesData";
import { fetchDepartures } from "../services/fetchDepartures";

export const Departures = () => {
  const [departuresData, setDeparturesData] = useState<SLDeparturesData | null>(
    null
  );
  const handleSearch = async () => {
    const data = await fetchDepartures();

    setDeparturesData(data);
  };
  return (
    <div>
      <button onClick={handleSearch}>Sök</button>
      {departuresData && (
        <div>
          <h3>Bussar</h3>
          <ul>
            {departuresData.Buses.map((bus, index) => (
              <li key={index}>
                {bus.Destination} - {bus.DisplayTime}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
