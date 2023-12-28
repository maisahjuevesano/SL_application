import { styled } from "styled-components";
import SlImage from "../assets/SLpicture_50px.png";

export const StyledHeader = styled.header`
  display: flex;
  background-color: #2870f0;
  justify-content: center;
`;

export const StyledNav = styled.nav`
  margin-top: 50px;
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #d9d9d9;
  border-radius: 15px;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;

  &:not(:last-child)::after {
    content: "|";
    color: black;
    margin: 0 10px;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${SlImage});
  width: 50px;
  height: 40px;
  background-size: cover;
  background-position: center;
`;

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: pink;
  }
`;
