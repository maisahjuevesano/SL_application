import { useEffect, useState } from "react";
import { Leg, Trip, TripResponse } from "../models/ApiTravelResponse";
import { useTheme } from "../models/theme-context";
import { fetchSiteId } from "../services/fetchSiteId";
import { fetchTripData } from "../services/travelService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";

import {
  DivHeading,
  Heading3,
  InputAndButtonContainer,
  LegContainer,
  LegDetail,
  LegHeader,
  SearchTravelPlannerContainer,
  StyledButton,
  StyledInput,
  StyledSwitchButton,
  TravelPlannerContainer,
  TripContainer,
} from "../styled/styledTravelPlanner";
import { SearchHistory } from "./SearchHistory";
import { Search } from "../models/search";

export const TravelPlanner = () => {
  const [originName, setOriginName] = useState<string>("");
  const [destName, setDestName] = useState<string>("");
  const [tripData, setTripData] = useState<TripResponse | null>(null);
  const [error, setError] = useState<string>("");
  const { isToggled } = useTheme();

  const [searchHistory, setSearchHistory] = useState<Search[]>(() => {
    const loadedHistory = localStorage.getItem("searchHistory");
    return loadedHistory ? JSON.parse(loadedHistory) : [];
  });

  useEffect(() => {
    const loadedHistory = localStorage.getItem("searchHistory");
    if (loadedHistory) {
      setSearchHistory(JSON.parse(loadedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearchSelect = async (search: Search) => {
    setOriginName(search.origin);
    setDestName(search.destination);

    await new Promise((resolve) => setTimeout(resolve, 0));
    handleFetchTrip();
  };

  const handleSwapInputs = () => {
    setOriginName(destName);
    setDestName(originName);
  };

  const handleFetchTrip = async () => {
    try {
      const originId = await fetchSiteId(originName);
      const destId = await fetchSiteId(destName);

      if (originId && destId) {
        const data = await fetchTripData(originId, destId);
        setTripData(data);
        setError("");

        setSearchHistory((prevHistory) => {
          const newHistory = [
            { origin: originName, destination: destName },
            ...prevHistory,
          ].slice(0, 10);

          localStorage.setItem("searchHistory", JSON.stringify(newHistory));
          return newHistory;
        });
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

  const onSearchRemove = (searchToRemove: {
    origin: string;
    destination: string;
  }) => {
    // Använda filter för att skapa en ny array som inte innehåller sökningen du vill ta bort
    const newSearchHistory = searchHistory.filter(
      (search) => search !== searchToRemove
    );

    // Uppdatera din sökhistorik med den nya arrayen
    setSearchHistory(newSearchHistory);
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
    <>
      <TravelPlannerContainer>
        <SearchTravelPlannerContainer>
          <DivHeading>
            <Heading3 $istoggled={isToggled}>Sök resa</Heading3>
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
            <StyledSwitchButton onClick={handleSwapInputs}>
              <FontAwesomeIcon icon={faArrowsUpDown} />
            </StyledSwitchButton>
            <StyledButton onClick={handleFetchTrip}>Sök resa</StyledButton>
            {error && <p>{error}</p>}
            <div>{renderTripData()}</div>
          </InputAndButtonContainer>
        </SearchTravelPlannerContainer>
      </TravelPlannerContainer>

      <SearchHistory
        history={searchHistory}
        onSearchSelect={handleSearchSelect}
        onSearchRemove={onSearchRemove}
      ></SearchHistory>
    </>
  );
};

export default TravelPlanner;
