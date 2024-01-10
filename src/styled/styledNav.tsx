import { styled } from "styled-components";
import SlImage from "../assets/SLpicture_50px.png";
import { ToggleContainerProps } from "../models/toggleContainerProps";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNav = styled.nav`
  height: 60px;
  border-radius: 15px;
  background-color: rgba(217, 217, 217, 0.5);
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
    color: ${(props) => (props.$istoggled ? "#3e4245" : "#94b0c2")};
    margin: 0 10px;
  }

  a {
    color: ${(props) => (props.$istoggled ? "#3e4245" : "#94b0c2")};
    text-decoration: none;
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

export const ToggleContainer = styled.div<ToggleContainerProps>`
  width: 50px;
  height: 25px;
  background-color: ${(props) => (props.$istoggled ? "green" : "grey")};
  border-radius: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$istoggled ? "flex-end" : "flex-start")};
  cursor: pointer;
`;

export const ToggleKnob = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: all 0.3s ease;
`;
