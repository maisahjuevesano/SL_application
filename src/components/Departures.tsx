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
  StyledInput,
} from "../styled/styledDepartures";
import { Train } from "../styled/StyledTrain";
import DepartureHistory from "./DepartureHistory";

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

  const handleHistorySelect = (historySearch: string) => {
    setSearchString(historySearch);
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
            <StyledButton onClick={handleSearch}>Sök</StyledButton>
          </InputAndButtonContainer>
        </SearchTravelContainer>

        {departuresData && (
          <Container>
            {searchedStation && <h2>{searchedStation}</h2>}
            <DivContainer>
              {departuresData.Buses.map((bus, index) => (
                <InfoDiv key={index}>
                  {`${bus.Destination} - ${bus.DisplayTime}`}
                </InfoDiv>
              ))}
            </DivContainer>
          </Container>
        )}
      </DeparturesContainer>
      <DepartureHistory
        searchHistory={searchHistory}
        onSelectHistoryItem={handleHistorySelect}
        onRemoveHistoryItem={handleRemoveHistoryItem}
      />
    </>
  );
};
