import { Link } from "react-router-dom";
import {
  ImageContainer,
  StyledLi,
  StyledNav,
  StyledUl,
} from "../styled/styledNav";

export const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <Link to="/">Sök resa</Link>
        </StyledLi>

        <StyledLi>
          <Link to="/departures">Sök avgångar</Link>
        </StyledLi>

        <StyledLi>
          <Link to="/home">
            <ImageContainer></ImageContainer>
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
