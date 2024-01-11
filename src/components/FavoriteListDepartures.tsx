import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
  FavoriteSelectButton,
} from "../styled/StyledFavoriteList";

interface FavoriteListDeparturesProps {
  favorites: string[];
  onFavoriteSelect: (favorite: string) => void;
}

const FavoriteListDepartures = ({
  favorites,
  onFavoriteSelect,
}: FavoriteListDeparturesProps) => {
  return (
    <FavoriteListContainer>
      <Heading3FavoriteList>Favoritavgångar</Heading3FavoriteList>
      {favorites.map((favorite, index) => (
        <FavoriteItem key={index}>
          {favorite}
          <FavoriteSelectButton onClick={() => onFavoriteSelect(favorite)}>
            Välj
          </FavoriteSelectButton>
        </FavoriteItem>
      ))}
    </FavoriteListContainer>
  );
};

export default FavoriteListDepartures;
