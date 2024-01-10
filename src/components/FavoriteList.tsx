import { Search } from "../models/search";
import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
} from "../styled/StyledFavoriteList";

interface FavoriteListProps {
  favorites: Search[];
  onFavoriteSelect: (search: Search) => void;
}

const FavoriteList = ({ favorites, onFavoriteSelect }: FavoriteListProps) => {
  return (
    <FavoriteListContainer>
      <Heading3FavoriteList>Favoritsökningar</Heading3FavoriteList>
      {favorites.map((search, index) => (
        <FavoriteItem key={index} onClick={() => onFavoriteSelect(search)}>
          Från: {search.origin}, Till: {search.destination}
        </FavoriteItem>
      ))}
    </FavoriteListContainer>
  );
};

export default FavoriteList;
