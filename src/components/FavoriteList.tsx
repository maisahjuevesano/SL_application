import { Search } from "../models/search";
import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
  FavoriteSelectButton,
} from "./../styled/StyledFavoriteList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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
    <FavoriteListContainer>
      <Heading3FavoriteList>Favoritsökningar</Heading3FavoriteList>
      {favorites.map((search, index) => (
        <FavoriteItem key={index}>
          Från: {search.origin}, Till: {search.destination}
          <FavoriteSelectButton onClick={() => onFavoriteSelect(search)}>
            Välj
          </FavoriteSelectButton>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => onRemoveFavorite(search)}
          />
        </FavoriteItem>
      ))}
    </FavoriteListContainer>
  );
};

export default FavoriteList;
