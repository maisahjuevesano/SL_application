import { styled } from "styled-components";

export const FavoriteListContainer = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: #94b0c2 3px solid;
`;

export const FavoriteItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  /* border-bottom: 2px solid #ffffff; */
`;

export const SearchDetail = styled.div`
  /* margin: 3px 0; //kanske ändra eller ta bort */
`;

export const Heading3FavoriteList = styled.h3``;

export const FavoriteSelectButton = styled.button`
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
