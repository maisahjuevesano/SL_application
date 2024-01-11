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
  background-color: #aa71d8;
  align-items: center;
  height: 25vh;
  width: 260px;
  border-radius: 4%;
  border: 1px solid #c67bbf;
`;
export const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ae7dd6;
  border: #e8888d 1px solid;
  align-items: center;
  width: 260px;
  border-radius: 4%;
  margin-left: 40px;
  padding-top: 10px;
`;

export const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: #d49ac5 3px solid;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  font-weight: bolder;
  background-color: white;
  border: none;
  padding: 10px 80px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: #d49ac5 3px solid;
  font-size: 16px;
  cursor: pointer;
  transition: background-colour 0.3s ease;

  &:hover {
    background-color: #6e5af4;
  }

  &:active {
    background-color: #c67bbf;
  }

  &:focus {
    box-shadow: 0 0 0 2px #bbb;
  }
`;

export const StyledButtonAlternative = styled.button<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "white")};
  display: flex;
  justify-content: space-around;
  font-weight: bolder;
  background-color: #aa71d8b8;
  border: none;
  margin-top: 100px;
  height: 40px;
  align-items: center;
  width: 135px;
  border-radius: 10px;
  border: #6e5af4 2px solid;
  margin-left: 15px;
  font-size: 15px;
  cursor: pointer;
  transition: background-colour 0.3s ease;

  &:hover {
    background-color: #6e5af4;
  }

  &:active {
    background-color: #c67bbf;
  }

  &:focus {
    box-shadow: 0 0 0 2px #bbb;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
`;

export const StyledSwitchButton = styled.button<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "white")};
  border-radius: 50%;
  transition: all 0.3s ease;
  background-color: #d49ac5;
  width: 30px;
  height: 30px;
  border: #aa71d8 2px solid;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #6e5af4;
  }

  &:active {
    background-color: #c67bbf;
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
  color: ${(props) => (props.$istoggled ? "white" : "#94b0c2")};
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

export const LegHeader = styled.h3<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "black")};
  margin: 0 0 10px 0;
`;

export const LegDetail = styled.div`
  color: #333;
  font-size: 14px;
  line-height: 1.5;
`;

export const ContainerSearchHistoryAndFavoriteList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
