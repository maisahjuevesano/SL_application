import { styled } from "styled-components";

export const SearchHistoryContainer = styled.div`
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40%;
  // Media query för skärmar mindre än 600px
  @media (min-width: 375px) {
    background-color: green;
    /* padding: 10px; */
  }
`;

export const SearchItem = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 2px solid #ffffff;
`;

export const SearchDetail = styled.div`
  /* margin: 3px 0; //kanske ändra eller ta bort */
`;

export const Heading3SearchHistory = styled.h3``;
