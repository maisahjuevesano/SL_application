import { styled } from "styled-components";
import SlImage from "../assets/SLpicture_50px.png";

export const StyledHeader = styled.header`
  display: flex;
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
  border-radius: 15px;
  background-color: rgba(217, 217, 217, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(10px);
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
    color: #f8ac41;
    margin: 0 10px;
  }

  a {
    color: #f8ac41;
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
    color: #f8ac41;
  }
`;
