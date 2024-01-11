import { styled } from "styled-components";

export const SearchHistoryContainer = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; //kanske ändra senare
  width: 300px;
  border: #94b0c2 3px solid;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 15px 10px;
  margin: 10px 0px;
  /* border-bottom: 2px solid #ffffff; */
  width: 100%;
`;

export const SearchDetail = styled.div`
  /* margin: 3px 0; //kanske ändra eller ta bort */
`;

export const Heading3SearchHistory = styled.h3``;

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
