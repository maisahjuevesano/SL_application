import { useState } from "react";
import { Leg, Trip, TripResponse } from "../models/ApiTravelResponse";
import { fetchTripData } from "../services/travelService";

export const TravelPlanner = () => {
  const [originId, setOriginId] = useState<string>("9109");
  const [destId, setDestId] = useState<string>("");
  const [tripData, setTripData] = useState<TripResponse | null>(null);
  const [error, setError] = useState<string>("");

  const handleFetchTrip = async () => {
    try {
      const data = await fetchTripData(originId, destId);
      setTripData(data);
      setError("");
    } catch (err) {
      setError("Kunde inte hämta resdata.");
      console.error(err);
    }
  };

  const renderLegs = (trip: Trip) => {
    return trip.LegList.Leg.map((leg: Leg, index: number) => (
      <div key={index}>
        <div>Från: {leg.Origin.name}</div>
        <div>Till: {leg.Destination.name}</div>
        <div>
          Tid: {leg.Origin.time} - {leg.Destination.time}
        </div>
        <div>Medel: {leg.Product.name}</div>
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
        value={originId}
        onChange={(e) => setOriginId(e.target.value)}
        placeholder="Startstation ID"
      />
      <input
        type="text"
        value={destId}
        onChange={(e) => setDestId(e.target.value)}
        placeholder="Destination ID"
      />
      <button onClick={handleFetchTrip}>Hitta Resa</button>
      {error && <p>{error}</p>}
      <div>{renderTripData()}</div>
    </div>
  );
};

export default TravelPlanner;
