import { styled } from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const DeparutesHistoryContainer = styled.div<ToggleContainerProps>`
  background-color: ${(props) => (props.$istoggled ? "#aa71d8" : "#153e20")};
  border: 1px solid ${(props) => (props.$istoggled ? "#c67bbf" : "#ffb838")};
  color: ${(props) => (props.$istoggled ? "white" : "#ffb838")};
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  padding-bottom: 20px;
  padding: 10px;
`;

export const SearchItem = styled.div<ToggleContainerProps>`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid white;
  justify-content: space-around;
  padding-bottom: 10px;
  border-bottom: 1px solid
    ${(props) => (props.$istoggled ? "white" : "#d4814a")};
`;

export const Heading3DepartureHistory = styled.h3<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "#ffb838")};
`;

export const SearchButton = styled.button<ToggleContainerProps>`
  background-color: ${(props) => (props.$istoggled ? "#aa71d8" : "#153e20")};
  border-radius: 10px;
  border: 1px solid ${(props) => (props.$istoggled ? "white" : "#d4814a")};
  width: 60px;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.$istoggled ? "#7d1d74" : "#78d691")};
  }

  &:active {
    background-color: ${(props) => (props.$istoggled ? "#7d1d74" : "#78d691")};
  }

  &:focus {
    box-shadow: 0 0 0 2px #bbb;
    box-shadow: ${(props) => (props.$istoggled ? "#7d1d74" : "#78d691")};
  }
`;

export const ContainerButtons = styled.div`
  padding-left: 5px;
`;
