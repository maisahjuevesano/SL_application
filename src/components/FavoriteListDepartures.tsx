import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
} from "../styled/StyledFavoriteList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface FavoriteListDeparturesProps {
  favorites: string[];
  onFavoriteSelect: (favorite: string) => void;
  onRemoveFavorite: (favorite: string) => void;
}

const FavoriteListDepartures = ({
  favorites,
  onFavoriteSelect,
  onRemoveFavorite,
}: FavoriteListDeparturesProps) => {
  return (
    <FavoriteListContainer $istoggled>
      <Heading3FavoriteList>Favoritavgångar</Heading3FavoriteList>
      {favorites.map((favorite, index) => (
        <FavoriteItem key={index}>
          {favorite}
          <button onClick={() => onFavoriteSelect(favorite)}>Välj</button>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => onRemoveFavorite(favorite)}
          />
        </FavoriteItem>
      ))}
    </FavoriteListContainer>
  );
};

export default FavoriteListDepartures;
