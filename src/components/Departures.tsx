import {
  Button,
  Container,
  DeparturesContainer,
  Heading2,
  Heading3,
  Input,
} from "../styled/styledDepartures";
import { Header, HeaderButton, HeaderContainer } from "../styled/styledHeader";
import slImage from "./../assets/SLpicture_50px.png";

export const Departures = () => {
  return (
    <DeparturesContainer>
      {" "}
      <h1>Departures page</h1>
      <Header>
        <HeaderContainer>
          <HeaderButton>Sök resa</HeaderButton>
          <HeaderButton>Sök avgångar</HeaderButton>
          <img src={slImage} alt="Picture of SL logo" />
        </HeaderContainer>
      </Header>
      <Container>
        <Heading2>Sök avgångar</Heading2>
        <Heading3>Från</Heading3>
        <Input placeholder="Styresman Sandersväg"></Input>
        <Button>Sök</Button>
      </Container>
    </DeparturesContainer>
  );
};
