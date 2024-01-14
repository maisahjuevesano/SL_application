import React, { useEffect, useState } from "react";
import { SLDeparturesData } from "../models/slDeparturesData";
import { useTheme } from "../models/theme-context";
import { fetchRealtimeDepartures } from "../services/fetchRealtimeDepartures";
import { fetchSiteId } from "../services/fetchSiteId";
import { Bus } from "../styled/StyledBus";
import {
  Container,
  DeparturesContainer,
  DivContainer,
  DivHeading,
  Heading3,
  Heading3Black,
  InfoDiv,
  InputAndButtonContainer,
  SearchTravelContainer,
  StyledButton,
  StyledButtonAlternative,
  StyledButtonContainer,
  StyledInput,
} from "../styled/styledDepartures";

import { Train } from "../styled/StyledTrain";
import DepartureHistory from "./DepartureHistory";
import FavoriteListDepartures from "./FavoriteListDepartures";
import { Weather } from "./../components/Weather";

export const Departures = () => {
  const [departuresData, setDeparturesData] = useState<SLDeparturesData | null>(
    null
  );
  const [searchString, setSearchString] = useState<string>("");
  const [searchedStation, setSearchStation] = useState<string>("");
  const { isToggled } = useTheme();
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const loadedHistory = localStorage.getItem("departureSearchHistory");
    return loadedHistory ? JSON.parse(loadedHistory) : [];
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const loadedFavorites = localStorage.getItem("departureFavorites");
    return loadedFavorites ? JSON.parse(loadedFavorites) : [];
  });

  const [currentView, setCurrentView] = useState<"history" | "favorites">(
    "history"
  );

  const handleFavoriteSelect = async (favorite: string) => {
    const siteId = await fetchSiteId(favorite);
    if (siteId) {
      const departures = await fetchRealtimeDepartures(siteId);
      setDeparturesData(departures);
      const capitalizedFavorite = capitalizeFirstLetter(favorite);
      setSearchStation(capitalizedFavorite);

      localStorage.setItem("searchedStation", capitalizedFavorite);
      localStorage.setItem("departuresData", JSON.stringify(departures));
    } else {
      // Hantera fallet där ingen station hittas
      // Exempel: visa ett felmeddelande till användaren
    }
  };

  const handleToggleFavorite = (item: string) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(item);
      let newFavorites;

      if (isFavorite) {
        newFavorites = prevFavorites.filter((favorite) => favorite !== item);
      } else {
        newFavorites = [...prevFavorites, item];
      }

      localStorage.setItem("departureFavorites", JSON.stringify(newFavorites));

      return newFavorites;
    });
  };
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

      setSearchHistory((prevHistory) => {
        const newHistory = [
          ...new Set([capitalizedSearchString, ...prevHistory]),
        ].slice(0, 10);
        localStorage.setItem(
          "departureSearchHistory",
          JSON.stringify(newHistory)
        );
        return newHistory;
      });

      setSearchString("");
    }
  };

  const handleHistorySelect = async (historySearch: string) => {
    setSearchString(historySearch);
    const siteId = await fetchSiteId(historySearch);
    if (siteId) {
      const departures = await fetchRealtimeDepartures(siteId);
      setDeparturesData(departures);
      const capitalizedSearchString = capitalizeFirstLetter(historySearch);
      setSearchStation(capitalizedSearchString);

      localStorage.setItem("searchedStation", capitalizedSearchString);
      localStorage.setItem("departuresData", JSON.stringify(departures));
    }
  };

  const handleRemoveHistoryItem = (itemToRemove: string) => {
    const updatedHistory = searchHistory.filter(
      (item) => item !== itemToRemove
    );
    setSearchHistory(updatedHistory);
    localStorage.setItem(
      "departureSearchHistory",
      JSON.stringify(updatedHistory)
    );
  };

  const handleRemoveFavorite = (favoriteToRemove: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (favorite) => favorite !== favoriteToRemove
      );

      localStorage.setItem(
        "departureFavorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  const handleEnterSearch = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await handleSearch();
    }
  };

  return (
    <>
      <DeparturesContainer>
        <Bus></Bus>
        <Weather></Weather>
        <Train></Train>
        <SearchTravelContainer $istoggled={isToggled}>
          <DivHeading>
            <Heading3Black $istoggled={isToggled}>Sök avgångar</Heading3Black>
          </DivHeading>
          <InputAndButtonContainer $istoggled={isToggled}>
            <DivHeading>
              <Heading3 $istoggled={isToggled}>Från</Heading3>
            </DivHeading>
            <StyledInput
              $istoggled={isToggled}
              type="text"
              value={searchString}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchString(e.target.value)
              }
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                handleEnterSearch(e)
              }
              placeholder="Sök avgång"
            />
            <StyledButton $istoggled={isToggled} onClick={handleSearch}>
              Sök
            </StyledButton>
          </InputAndButtonContainer>
        </SearchTravelContainer>
        <StyledButtonContainer>
          <StyledButtonAlternative
            $istoggled={isToggled}
            onClick={() => setCurrentView("favorites")}
          >
            Favoriter
          </StyledButtonAlternative>
          <StyledButtonAlternative
            $istoggled={isToggled}
            onClick={() => setCurrentView("history")}
          >
            Historik
          </StyledButtonAlternative>
        </StyledButtonContainer>
        {currentView === "history" ? (
          <DepartureHistory
            searchHistory={searchHistory}
            onSelectHistoryItem={handleHistorySelect}
            onRemoveHistoryItem={handleRemoveHistoryItem}
            onToggleFavorite={handleToggleFavorite}
            favorites={favorites}
          />
        ) : (
          <FavoriteListDepartures
            favorites={favorites}
            onFavoriteSelect={handleFavoriteSelect}
            onRemoveFavorite={handleRemoveFavorite}
          />
        )}

        {departuresData && (
          <Container $istoggled={isToggled}>
            {searchedStation && <h2>{searchedStation}</h2>}
            <DivContainer>
              <Heading3 $istoggled={isToggled}>Avångar mot</Heading3>
              {departuresData.Buses.map((bus, index) => (
                <InfoDiv key={index}>
                  {`${bus.Destination} - ${bus.DisplayTime}`}
                </InfoDiv>
              ))}
            </DivContainer>
          </Container>
        )}
      </DeparturesContainer>
    </>
  );
};
