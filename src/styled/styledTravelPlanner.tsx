import styled from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

//Sök resa

export const TravelPlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTravelPlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3e4245;
  align-items: center;
  height: 25vh;
  width: 260px;
  border-radius: 4%;
`;
export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(217, 217, 217, 0.5);
  align-items: center;
  height: 25vh;
  width: 260px;
  border-radius: 4%;
  margin-left: 40px;
  padding-top: 10px;
`;

export const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.5);
  border: none;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: white 3px solid;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  font-weight: bolder;
  background-color: rgba(217, 217, 217, 0.5);
  border: none;
  margin-top: 15px;
  padding: 10px 45px;
  border-radius: 10px;
  border: white 3px solid;
  font-size: 16px;
  cursor: pointer;
  transition: background-colour 0.3s ease;

  &:hover {
    background-color: #666;
  }

  &:active {
    background-color: #333;
  }

  &:focus {
    box-shadow: 0 0 0 2px #bbb;
  }
`;
export const StyledSwitchButton = styled.button`
  border-radius: 50%;
  transition: all 0.3s ease;
  font-weight: bolder;
  background-color: rgba(217, 217, 217, 0.5);
  width: 30px;
  height: 30px;
  border: white 3px solid;
  font-size: 16px;
  cursor: pointer;
  transition: background-colour 0.3s ease;

  &:hover {
    background-color: #666;
  }

  &:active {
    background-color: #333;
  }

  &:focus {
    box-shadow: 0 0 0 2px #bbb;
  }
`;

export const DivHeading = styled.div`
  width: 85%;
  text-align: start;
`;

export const Heading3 = styled.h3<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "#f8ac41")};
`;

//tripdatastyling
export const TripContainer = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 8px;
  width: 250px;
  margin: 10px 0;
  padding: 10px;
`;

export const LegContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(217, 217, 217, 0.5);
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const LegHeader = styled.h3`
  color: #f8ac41;
  margin: 0 0 10px 0;
`;

export const LegDetail = styled.div`
  color: #333;
  font-size: 14px;
  line-height: 1.5;
`;
