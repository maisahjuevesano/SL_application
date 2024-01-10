import { styled } from "styled-components";

export const DeparutesHistoryContainer = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const SearchItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Heading3DepartureHistory = styled.h3``;

export const SearchButton = styled.button`
  background-color: rgba(217, 217, 217, 0.5);
  margin-top: 10px;
  border-radius: 10px;
  border: white 3px solid;
  margin-right: 3px;

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

export const ContainerButtons = styled.div`
  padding-left: 5px;
`;
