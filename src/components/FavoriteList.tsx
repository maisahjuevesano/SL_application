import { Search } from "../models/search";
import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
  ContainerButtons,
  SearchButton,
  Container,
  SearchDetail,
} from "./../styled/StyledFavoriteList";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { StyledTrashIcon } from "../styled/StyledHistory";
import { useTheme } from "styled-components";

interface FavoriteListProps {
  favorites: Search[];
  onFavoriteSelect: (search: Search) => void;
  onRemoveFavorite: (search: Search) => void;
}

const FavoriteList = ({
  favorites,
  onFavoriteSelect,
  onRemoveFavorite,
}: FavoriteListProps) => {
  const { isToggled } = useTheme();
  return (
    <FavoriteListContainer $istoggled={isToggled}>
      <Heading3FavoriteList>Favoritsökningar</Heading3FavoriteList>
      {favorites.map((search, index) => (
        <FavoriteItem $istoggled={isToggled} key={index}>
          <Container>
            <SearchDetail>Från: {search.origin}</SearchDetail>
            <SearchDetail>Till: {search.destination}</SearchDetail>
          </Container>

          <ContainerButtons>
            <SearchButton onClick={() => onFavoriteSelect(search)}>
              Välj
            </SearchButton>
            <StyledTrashIcon
              icon={faTrashCan}
              onClick={() => onRemoveFavorite(search)}
            />
          </ContainerButtons>
        </FavoriteItem>
      ))}
    </FavoriteListContainer>
  );
};

export default FavoriteList;
