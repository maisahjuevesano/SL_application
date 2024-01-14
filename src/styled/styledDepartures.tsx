import styled from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const DeparturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchTravelContainer = styled.div<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25vh;
  width: 260px;
  border-radius: 4%;
  color: ${(props) =>
    props.$istoggled ? "rgba(217, 217, 217, 0.5)" : "#3e4245"};
  background-color: ${(props) =>
    props.$istoggled ? "#8a3bcb70" : "#004b97cb"};
  border: 1px solid ${(props) => (props.$istoggled ? "#c67bbf" : "#209259c1")};
`;
export const InputAndButtonContainer = styled.div<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$istoggled ? "#ae7dd671" : "#477c59c1"};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4824ac1")};
  align-items: center;
  height: 50vh;
  width: 260px;
  border-radius: 4%;
  margin-top: 30px;
  margin-left: 30px;
`;

export const StyledInput = styled.input<ToggleContainerProps>`
  background-color: ${(props) => (props.$istoggled ? "#ae7dd6" : "#164727c1")};
  color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4824ac1")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledButton = styled.button<ToggleContainerProps>`
  background-color: ${(props) => (props.$istoggled ? "#ae7dd6" : "#164727c1")};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4814a")};
  color: ${(props) => (props.$istoggled ? "white" : "#ffb838")};
  font-weight: bolder;
  margin-top: 15px;
  padding: 10px 99px;
  margin-bottom: 15px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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
export const StyledButtonAlternative = styled.button<ToggleContainerProps>`
  background-color: ${(props) =>
    props.$istoggled ? "#6f5af4ac" : "#164727c1"};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4814a")};
  color: ${(props) => (props.$istoggled ? "white" : "#ffb838")};
  font-weight: bolder;
  margin-top: 100px;
  padding: 10px 15px;
  border-radius: 10px;
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
export const Heading2 = styled.h2``;

export const Heading3 = styled.h2<ToggleContainerProps>`
  display: flex;
  color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
  font-size: 16px;
`;

export const Heading3Black = styled.h3<ToggleContainerProps>`
  display: flex;
  margin-bottom: 0;
  color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivHeading = styled.div`
  width: 85%;
  text-align: start;
`;

export const Container = styled.div<ToggleContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  color: ${(props) => (props.$istoggled ? "white" : "#f0ca21c1")};
  background-color: ${(props) =>
    props.$istoggled ? "#704dd992" : "#164727c1"};
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4814a")};
  margin-top: 15px;
  width: 300px;
  min-height: 25vh;
  flex-grow: 1;
  margin-bottom: 15px;
`;

export const InfoDiv = styled.div`
  display: flex;
  margin-top: 3px;
  border-bottom: 1px solid white;
`;
