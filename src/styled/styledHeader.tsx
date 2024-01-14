import { styled } from "styled-components";

export const Header = styled.header``;

export const HeaderContainer = styled.div``;

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
