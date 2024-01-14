import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const FavoriteListContainer = styled.div<ToggleContainerProps>`
  color: ${(props) => (props.$istoggled ? "white" : "white")};
  background-color: #aa71d845; //ändra
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: ${(props) => (props.$istoggled ? "white" : "#f98e5b")};
  border: #f98e5b 2px solid;
  padding: 10px;
  width: 290px;
`;

export const FavoriteItem = styled.div<ToggleContainerProps>`
  //fixa!!!
  display: flex;
  align-items: center;
  border-bottom: 2px solid #f98e5b;
  height: 50px;
  justify-content: space-around;
  /* padding: 15px; */
  /* margin: 15px; */
`;

export const Container = styled.div`
  display: flex;
`;

export const SearchDetail = styled.div`
  /* margin: 3px 0; //kanske ändra eller ta bort */
`;

export const Heading3FavoriteList = styled.h3``;

export const SearchButton = styled.button`
  height: 20px;

  background-color: #af73d4;
  border-radius: 10px;
  border: #aa71d8 3px solid;

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

export const StyledTrashIcon = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    color: #f00;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`;
