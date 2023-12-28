import { useState } from "react";
import { Leg, Trip, TripResponse } from "../models/ApiTravelResponse";
import { fetchSiteId } from "../services/fetchSiteId";
import { fetchTripData } from "../services/travelService";

export const TravelPlanner = () => {
  const [originName, setOriginName] = useState<string>("");
  const [destName, setDestName] = useState<string>("");
  const [tripData, setTripData] = useState<TripResponse | null>(null);
  const [error, setError] = useState<string>("");

  const handleFetchTrip = async () => {
    try {
      const originId = await fetchSiteId(originName);
      const destId = await fetchSiteId(destName);

      if (originId && destId) {
        const data = await fetchTripData(originId, destId);
        setTripData(data);
        setError("");
      } else {
        setError("Kunde inte hitta station ID.");
      }
    } catch (err) {
      setError("Kunde inte hämta resdata.");
      console.error(err);
    }
  };

  const renderLegs = (trip: Trip) => {
    return trip.LegList.Leg.map((leg: Leg, index: number) => (
      <div key={index}>
        <div>Från: {leg.Origin?.name || "Okänd"}</div>
        <div>Till: {leg.Destination?.name || "Okänd"}</div>
        <div>
          Tid: {leg.Origin?.time || "Okänd tid"} -{" "}
          {leg.Destination?.time || "Okänd tid"}
        </div>
        <div>Medel: {leg.Product?.name || "Okänt"}</div>
        <hr />
      </div>
    ));
  };

  const renderTripData = () => {
    if (!tripData) return null;
    return tripData.Trip.map((trip: Trip, index: number) => (
      <div key={index}>
        <h3>Resa {index + 1}</h3>
        {renderLegs(trip)}
      </div>
    ));
  };

  return (
    <div>
      <input
        type="text"
        value={originName}
        onChange={(e) => setOriginName(e.target.value)}
        placeholder="Startstation Namn"
      />
      <input
        type="text"
        value={destName}
        onChange={(e) => setDestName(e.target.value)}
        placeholder="Destination Namn"
      />
      <button onClick={handleFetchTrip}>Hitta Resa</button>
      {error && <p>{error}</p>}
      <div>{renderTripData()}</div>
    </div>
  );
};

export default TravelPlanner;
