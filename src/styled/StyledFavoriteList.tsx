import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const FavoriteListContainer = styled.div<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "#ffb838")};
  background-color: ${(props) => (props.$istoggled ? "#aa71d8" : "#477c59c1")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 350px;
  border: 1px solid ${(props) => (props.$istoggled ? "#e8888d" : "#d4814a")};
`;

export const FavoriteItem = styled.div<ToggleContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px 0px 15px 10px;
  margin: 10px 0px;
  width: 335px;
  justify-content: space-around;
  padding: 5px;
  border-bottom: 1px solid
    ${(props) => (props.$istoggled ? "white" : "#d4814a")};
`;

export const Container = styled.div`
  display: flex;
`;

export const SearchDetail = styled.div``;

export const Heading3FavoriteList = styled.h3``;

export const StyledTrashIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    color: #f00;
  }
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
  display: flex;
  gap: 10px;
`;
