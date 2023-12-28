import { Link } from "react-router-dom";
import {
  ImageContainer,
  StyledHeader,
  StyledLi,
  StyledNav,
  StyledUl,
} from "../styled/styledNav";

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
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};
