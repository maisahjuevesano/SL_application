import {
  faTrashCan,
  faStar as regularStar,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  DeparutesHistoryContainer,
  Heading3DepartureHistory,
  SearchButton,
  SearchItem,
} from "../styled/StyledDepartureHistory";
import { useTheme } from "../models/theme-context";
import { StyledTrashIcon } from "../styled/StyledFavoriteList";
import { StyledStarIcon } from "../styled/StyledHistory";

interface DepartureHistoryProps {
  searchHistory: string[];
  onSelectHistoryItem: (item: string) => void;
  onRemoveHistoryItem: (item: string) => void;
  onToggleFavorite: (item: string) => void;
  favorites: string[];
}

const DepartureHistory = ({
  searchHistory,
  onSelectHistoryItem,
  onRemoveHistoryItem,
  onToggleFavorite,
  favorites,
}: DepartureHistoryProps) => {
  const { isToggled } = useTheme();
  return (
    <DeparutesHistoryContainer $istoggled={isToggled}>
      <Heading3DepartureHistory $istoggled={isToggled}>
        Tidigare Sökningar
      </Heading3DepartureHistory>
      {searchHistory.map((item, index) => (
        <SearchItem $istoggled={isToggled} key={index}>
          {item}
          <SearchButton
            $istoggled={isToggled}
            onClick={() => onSelectHistoryItem(item)}
          >
            Sök
          </SearchButton>

          <StyledTrashIcon
            icon={faTrashCan}
            onClick={() => onRemoveHistoryItem(item)}
          ></StyledTrashIcon>
          <StyledStarIcon
            icon={favorites.includes(item) ? solidStar : regularStar}
            onClick={() => onToggleFavorite(item)}
          ></StyledStarIcon>
        </SearchItem>
      ))}
    </DeparutesHistoryContainer>
  );
};

export default DepartureHistory;
