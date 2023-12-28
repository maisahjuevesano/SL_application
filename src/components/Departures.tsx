import React, { useEffect, useState } from "react";
import { SLDeparturesData } from "../models/slDeparturesData";
import { fetchRealtimeDepartures } from "../services/fetchRealtimeDepartures";
import { fetchSiteId } from "../services/fetchSiteId";
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

export const Departures = () => {
  const [departuresData, setDeparturesData] = useState<SLDeparturesData | null>(
    null
  );
  const [searchString, setSearchString] = useState<string>("");
  const [searchedStation, setSearchStation] = useState<string>("");

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
      setSearchString("");
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
    <DeparturesContainer>
      <SearchTravelContainer>
        <DivHeading>
          <Heading3Black>Sök resa</Heading3Black>
        </DivHeading>
        <InputAndButtonContainer>
          <DivHeading>
            <Heading3>Från</Heading3>
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
  );
};
