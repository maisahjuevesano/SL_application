import { styled } from "styled-components";
import SlImage from "../assets/SLpicture_50px.png";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.nav<ToggleContainerProps>`
  height: 60px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.$istoggled ? "#6f5af4ac" : "#4eaa6799"};
  border: 2px solid ${(props) => (props.$istoggled ? "white" : "#ffb838")};
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLi = styled.li<ToggleContainerProps>`
  display: flex;
  flex-direction: row;
  font-weight: bolder;

  &:not(:last-child)::after {
    content: "|";
    color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
    margin: 0 10px;
  }

  a {
    color: ${(props) => (props.$istoggled ? "#ffffff" : "#ffb838")};
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer = styled.div`
  background-image: url(${SlImage});
  width: 50px;
  height: 41px;
`;

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: #94b0c2;
  }
`;
