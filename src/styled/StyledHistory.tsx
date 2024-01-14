import { styled } from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchHistoryContainer = styled.div<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "white")};
  background-color: ${(props) => (props.$istoggled ? "#aa71d8" : "#477c59c1")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 350px;
  border: #6e5af4 1px solid;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 15px 10px;
  margin: 10px 0px;
  width: 335px;
  justify-content: space-around;
  padding: 5px;
  border-bottom: 1px solid #6e5af4;
`;

export const SearchDetail = styled.div``;

export const Heading3SearchHistory = styled.h3``;

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
  display: flex;
  gap: 10px;
`;

export const StyledTrashIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    color: #f00;
  }
`;

export const StyledStarIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    color: #ff0;
  }
`;
