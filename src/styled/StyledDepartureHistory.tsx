import { styled } from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const DeparutesHistoryContainer = styled.div<ToggleContainerProps>`
  background-color: ${(props) =>
    props.$istoggled ? "#004b97c1" : "#189cbdf4"};
  background-color: ${(props) => (props.$istoggled ? "#aa71d8" : "#477c59c1")};
  border: 1px solid ${(props) => (props.$istoggled ? "#c67bbf" : "#209259c1")};
  color: ${(props) => (props.$istoggled ? "white" : "#ffb838")};
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  padding-bottom: 20px;
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

export const SearchButton = styled.button`
  background-color: #aa71d8b8;
  border-radius: 10px;
  border: #6e5af4 2px solid;
  width: 60px;
  margin-right: 5px;
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

export const ContainerButtons = styled.div`
  padding-left: 5px;
`;
