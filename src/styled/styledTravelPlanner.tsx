import styled from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const TravelPlannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTravelPlannerContainer = styled.div<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$istoggled ? "#ae7dd671" : "#004b97c1"};
  border: 1px solid ${(props) => (props.$istoggled ? "#c67bbf" : "#209259c1")};
  align-items: center;
  height: 25vh;
  width: 260px;
  border-radius: 4%;
`;
export const InputAndButtonContainer = styled.div<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$istoggled ? "#ae7dd671" : "#477c59c1"};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4824ac1")};
  align-items: center;
  width: 260px;
  border-radius: 4%;
  margin-left: 40px;
  padding-top: 10px;
`;

export const StyledInput = styled.input<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.$istoggled ? "#ae7dd671" : "#164727c1"};
  color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4824ac1")};
  font-size: 16px;
  cursor: pointer;
`;

export const StyledButton = styled.button<ToggleContainerProps>`
  font-weight: bolder;
  background-color: ${(props) => (props.$istoggled ? "#ae7dd6" : "#164727c1")};
  color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4824ac1")};
  padding: 10px 80px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 10px;

  font-size: 16px;
  cursor: pointer;
  transition: background-colour 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$istoggled ? "#6f5af4ac" : "#6ef39c"};
  }

  &:active {
    background-color: ${(props) => (props.$istoggled ? "#d785bd" : "#6ef39c")};
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) => (props.$istoggled ? "#6f5af4ac" : "#6ef39c")};
  }
`;

export const StyledButtonAlternative = styled.button<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "#ffb838")};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4814a")};
  display: flex;
  justify-content: space-around;
  background-color: ${(props) =>
    props.$istoggled ? "#6f5af4ac" : "#164727c1"};
  margin-top: 100px;
  height: 40px;
  align-items: center;
  width: 135px;
  border-radius: 10px;
  font-weight: bolder;
  margin-left: 15px;
  font-size: 15px;
  cursor: pointer;
  transition: background-colour 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$istoggled ? "#6f5af4ac" : "#6ef39c"};
  }

  &:active {
    background-color: ${(props) => (props.$istoggled ? "#d785bd" : "#6ef39c")};
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) => (props.$istoggled ? "#6f5af4ac" : "#6ef39c")};
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
`;

export const StyledSwitchButton = styled.button<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "#ae7dd6" : "#c5e7d0da")};
  border-radius: 50%;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.$istoggled ? "#d49ac5" : "#477c59c1")};
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4814af6")};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$istoggled ? "#6f5af4ac" : "#6ef39c"};
  }

  &:active {
    background-color: ${(props) => (props.$istoggled ? "#d785bd" : "#6ef39c")};
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) => (props.$istoggled ? "#6f5af4ac" : "#6ef39c")};
  }
`;

export const DivHeading = styled.div`
  width: 85%;
  text-align: start;
`;

export const Heading3 = styled.h3<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
`;

export const ContainerSearchHistoryAndFavoriteList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TripContainer = styled.div<ToggleContainerProps>`
  background-color: ${(props) =>
    props.$istoggled ? "#ae7dd671" : "#477c59c1"};
  border-radius: 8px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(33.333% - 10px);
    margin: 5px;
  }
`;

export const LegContainer = styled.div<ToggleContainerProps>`
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${(props) =>
    props.$istoggled ? "#ae7dd671" : "#99c0a6c1"};
  border: 1px solid ${(props) => (props.$istoggled ? "white" : "#d4824ac1")};
  border-radius: 8px;
`;

export const LegDetail = styled.div<ToggleContainerProps>`
  color: white;
  font-size: 14px;
  line-height: 1.5;
`;
