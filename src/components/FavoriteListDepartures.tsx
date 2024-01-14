import {
  FavoriteItem,
  FavoriteListContainer,
  Heading3FavoriteList,
  StyledTrashIcon,
} from "../styled/StyledFavoriteList";

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../models/theme-context";
import { SearchButton } from "../styled/StyledDepartureHistory";

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
  const { isToggled } = useTheme();
  return (
    <FavoriteListContainer $istoggled={isToggled}>
      <Heading3FavoriteList>Favoritavgångar</Heading3FavoriteList>
      {favorites.map((favorite, index) => (
        <FavoriteItem $istoggled={isToggled} key={index}>
          {favorite}
          <SearchButton onClick={() => onFavoriteSelect(favorite)}>
            Välj
          </SearchButton>
          <StyledTrashIcon
            icon={faTrashCan}
            onClick={() => onRemoveFavorite(favorite)}
          ></StyledTrashIcon>
        </FavoriteItem>
      ))}
    </FavoriteListContainer>
  );
};

export default FavoriteListDepartures;
