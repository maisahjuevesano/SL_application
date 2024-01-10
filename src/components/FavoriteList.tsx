import { Search } from "../models/search";
import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
  FavoriteSelectButton,
} from "./../styled/StyledFavoriteList";

interface FavoriteListProps {
  favorites: Search[];
  onFavoriteSelect: (search: Search) => void;
}

const FavoriteList = ({ favorites, onFavoriteSelect }: FavoriteListProps) => {
  return (
    <FavoriteListContainer>
      <Heading3FavoriteList>Favoritsökningar</Heading3FavoriteList>
      {favorites.map((search, index) => (
        <FavoriteItem key={index}>
          Från: {search.origin}, Till: {search.destination}
          <FavoriteSelectButton onClick={() => onFavoriteSelect(search)}>
            Välj
          </FavoriteSelectButton>
        </FavoriteItem>
      ))}
    </FavoriteListContainer>
  );
};

export default FavoriteList;
