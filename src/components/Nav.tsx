import { Link } from "react-router-dom";
import { useTheme } from "../models/theme-context";

import {
  ImageContainer,
  StyledHeader,
  StyledLi,
  StyledNav,
  StyledUl,
} from "../styled/styledNav";
import ToggleButton from "./ToggleButton";

export const Nav = () => {
  const { isToggled } = useTheme();

  return (
    <StyledHeader>
      <StyledNav $istoggled={isToggled}>
        <StyledUl>
          <StyledLi $istoggled={isToggled}>
            <Link to="/TravelPlanner">Sök resa</Link>
          </StyledLi>
          <StyledLi $istoggled={isToggled}>
            <Link to="/">Sök avgångar</Link>
          </StyledLi>
          <StyledLi $istoggled={isToggled}>
            <Link to="/">
              <ImageContainer></ImageContainer>
            </Link>
          </StyledLi>
          <StyledLi $istoggled={isToggled}>
            <ToggleButton />
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};
