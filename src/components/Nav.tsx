// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
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
      <StyledNav>
        <StyledUl>
          <StyledLi isToggled={isToggled}>
            <Link to="/TravelPlanner">Sök resa</Link>
          </StyledLi>
          <StyledLi isToggled={isToggled}>
            <Link to="/">Sök avgångar</Link>
          </StyledLi>
          <StyledLi isToggled={isToggled}>
            <Link to="/">
              <ImageContainer></ImageContainer>
            </Link>
          </StyledLi>
          <StyledLi isToggled={isToggled}>
            <ToggleButton />
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};
