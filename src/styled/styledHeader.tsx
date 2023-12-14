import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  padding: 10px 100px 20px;
  margin-bottom: 20px; // ändra i framtiden
  border-radius: 15px;
  /* width: 200px; */
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const HeaderButton = styled.button`
  background-color: #d9d9d9;
  font-weight: bolder;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
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
