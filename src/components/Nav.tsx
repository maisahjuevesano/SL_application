// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

import {
  ImageContainer,
  StyledHeader,
  StyledLi,
  StyledNav,
  StyledUl,
} from "../styled/styledNav";
import ToggleButton from "./ToggleButton";

export const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <Link to="/TravelPlanner">Sök resa</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/">Sök avgångar</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/">
              <ImageContainer></ImageContainer>
            </Link>
          </StyledLi>
          <StyledLi>
            <ToggleButton />
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};
