import { useState } from "react";
import { Leg, Trip, TripResponse } from "../models/ApiTravelResponse";
import { fetchSiteId } from "../services/fetchSiteId";
import { fetchTripData } from "../services/travelService";
import { Heading3 } from "../styled/styledDepartures";
import {
  DivHeading,
  InputAndButtonContainer,
  LegContainer,
  LegDetail,
  LegHeader,
  SearchTravelPlannerContainer,
  StyledButton,
  StyledInput,
  TravelPlannerContainer,
  TripContainer,
} from "../styled/styledTravelPlanner";

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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFetchTrip();
    }
  };

  const renderLegs = (trip: Trip) => {
    return trip.LegList.Leg.map((leg: Leg, index: number) => (
      <LegContainer key={index}>
        <LegDetail>Från: {leg.Origin?.name || "Okänd"}</LegDetail>
        <LegDetail>Till: {leg.Destination?.name || "Okänd"}</LegDetail>
        <LegDetail>
          Tid: {leg.Origin?.time || "Okänd tid"} -{" "}
          {leg.Destination?.time || "Okänd tid"}
        </LegDetail>
        <LegDetail>Medel: {leg.Product?.name || "Okänt"}</LegDetail>
      </LegContainer>
    ));
  };

  const renderTripData = () => {
    if (!tripData) return null;
    return tripData.Trip.map((trip: Trip, index: number) => (
      <TripContainer key={index}>
        <LegHeader>Resa {index + 1}</LegHeader>
        {renderLegs(trip)}
      </TripContainer>
    ));
  };

  return (
    <TravelPlannerContainer>
      <SearchTravelPlannerContainer>
        <DivHeading>
          <Heading3>Sök resa</Heading3>
        </DivHeading>
        <InputAndButtonContainer>
          <StyledInput
            type="text"
            value={originName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOriginName(e.target.value)
            }
            onKeyPress={handleKeyPress}
            placeholder="Från"
          />
          <StyledInput
            type="text"
            value={destName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDestName(e.target.value)
            }
            onKeyPress={handleKeyPress}
            placeholder="Till"
          />
          <StyledButton onClick={handleFetchTrip}>Sök resa</StyledButton>

          {error && <p>{error}</p>}
          <div>{renderTripData()}</div>
        </InputAndButtonContainer>
      </SearchTravelPlannerContainer>
    </TravelPlannerContainer>
  );
};

export default TravelPlanner;
