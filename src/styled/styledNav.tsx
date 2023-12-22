import { styled } from "styled-components";
import SlImage from "../assets/SLpicture_50px.png";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  /* padding: 10px 100px 20px; */
  border-radius: 15px;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;

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

//Kanske ska ha streck emellan sökrösa och sökavgångar
//StyledLink fungerar ej får något fel på "to".

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: pink;
  }
`;
