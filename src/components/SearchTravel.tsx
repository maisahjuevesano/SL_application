// import { SearchTravelContainer } from "../styled/styledSearchTravel";
import { ChangeEvent, FormEvent, useState } from "react";

export const SearchTravel = () => {
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  // const [tripResults, setTripResults] = useState<any[]>([]);
  // const API_KEY = "Din-API-Nyckel-Här";

  const handleDepartureChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeparture(event.target.value);
  };

  const handleArrivalChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArrival(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Avgång:", departure, "Ankomst:", arrival);
  };

  return (
    <>
      <h1>Search Travel page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Avgångsplats:
          <input
            type="text"
            value={departure}
            onChange={handleDepartureChange}
          />
        </label>
        <br />
        <label>
          Ankomstplats:
          <input type="text" value={arrival} onChange={handleArrivalChange} />
        </label>
        <br />
        <button type="submit">Sök resa</button>
      </form>
    </>
  );
};

export default SearchTravel;
