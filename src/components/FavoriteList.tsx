import { Search } from "../models/search";
import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
  ContainerButtons,
  SearchButton,
  Container,
} from "./../styled/StyledFavoriteList";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { StyledTrashIcon } from "../styled/StyledHistory";

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
  return (
    <FavoriteListContainer $istoggled>
      <Heading3FavoriteList>Favoritsökningar</Heading3FavoriteList>
      {favorites.map((search, index) => (
        <FavoriteItem key={index}>
          <Container>
            <h4>Från: {search.origin}</h4>
            <h4>Till: {search.destination}</h4>
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
