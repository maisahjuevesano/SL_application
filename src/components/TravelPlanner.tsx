import { useCallback, useEffect, useState } from "react";
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

import { Search } from "../models/search";
import { SearchHistory } from "./SearchHistory";
import FavoriteList from "./FavoriteList";
import { Bus } from "../styled/StyledBus";
import { Train } from "../styled/StyledTrain";

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

  const [isSearchDisabled, setIsSearchDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const favoriteSearches = searchHistory.filter((search) => search.isFavorite);

  useEffect(() => {
    const loadedHistory = localStorage.getItem("searchHistory");
    if (loadedHistory) {
      setSearchHistory(JSON.parse(loadedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearchSelect = (search: Search) => {
    setOriginName(search.origin);
    setDestName(search.destination);
    handleFetchTrip(search.origin, search.destination);
  };

  const handleSwapInputs = () => {
    setOriginName(destName);
    setDestName(originName);
  };

  const handleFetchTrip = useCallback(async (o: string, d: string) => {
    console.log("handleFetchTrip called");

    if (!o || !d) {
      setIsSearchDisabled(true);
      setAlertMessage("Du måste fylla i vad du vill söka för resa");
      return;
    }

    setIsSearchDisabled(false);
    setAlertMessage("");

    try {
      const originId = await fetchSiteId(o);
      const destId = await fetchSiteId(d);

      if (originId && destId) {
        const data = await fetchTripData(originId, destId);
        setTripData(data);
        setError("");

        setSearchHistory((prevHistory: Search[]) => {
          const existingSearch = prevHistory.find(
            (search: Search) => search.origin === o && search.destination === d
          );

          if (!existingSearch) {
            const newHistory: Search[] = [
              { origin: o, destination: d },
              ...prevHistory,
            ].slice(0, 10);

            localStorage.setItem("searchHistory", JSON.stringify(newHistory));
            return newHistory;
          }

          return prevHistory;
        });
      } else {
        setError("Kunde inte hitta station ID.");
      }
    } catch (err) {
      setError("Kunde inte hämta resdata.");
      console.error(err);
    }
  }, []);

  // useEffect(() => {
  //   if (originName && destName) {
  //     handleFetchTrip();
  //   }
  // }, [originName, destName, handleFetchTrip]);

  useEffect(() => {
    if (!originName || !destName) {
      setIsSearchDisabled(true);
      setAlertMessage("Du måste fylla i vad du vill söka för resa");
    } else {
      setIsSearchDisabled(false);
      setAlertMessage("");
    }
  }, [originName, destName]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFetchTrip(originName, destName);
    }
  };

  const onSearchRemove = (searchToRemove: {
    origin: string;
    destination: string;
  }) => {
    const newSearchHistory = searchHistory.filter(
      (search) => search !== searchToRemove
    );

    setSearchHistory(newSearchHistory);
  };
  const onToggleFavorite = (searchToToggle: Search) => {
    const updatedHistory = searchHistory.map((search) => {
      if (
        search.origin === searchToToggle.origin &&
        search.destination === searchToToggle.destination
      ) {
        return { ...search, isFavorite: !search.isFavorite };
      }
      return search;
    });

    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleFavoriteSelect = (search: Search) => {
    handleSearchSelect(search);
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
        <Bus></Bus>
        <Train></Train>
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
            <StyledButton
              onClick={() => {
                handleFetchTrip(originName, destName);
              }}
              disabled={isSearchDisabled}
              // disabled={!originName || !destName}
            >
              Sök resa
            </StyledButton>
            {isSearchDisabled && <div>{alertMessage}</div>}
            {error && <p>{error}</p>}
            <div>{renderTripData()}</div>
          </InputAndButtonContainer>
        </SearchTravelPlannerContainer>
      </TravelPlannerContainer>

      <SearchHistory
        history={searchHistory}
        onSearchSelect={handleSearchSelect}
        onSearchRemove={onSearchRemove}
        onToggleFavorite={onToggleFavorite}
      ></SearchHistory>
      <FavoriteList
        favorites={favoriteSearches}
        onFavoriteSelect={handleFavoriteSelect}
      />
    </>
  );
};

export default TravelPlanner;
