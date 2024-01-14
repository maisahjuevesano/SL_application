import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faSearch,
  faStar as regularStar,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  DeparutesHistoryContainer,
  Heading3DepartureHistory,
  SearchItem,
} from "../styled/StyledDepartureHistory";
import { useTheme } from "../models/theme-context";

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

          <FontAwesomeIcon
            onClick={() => onSelectHistoryItem(item)}
            icon={faSearch}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => onRemoveHistoryItem(item)}
          />
          <FontAwesomeIcon
            icon={favorites.includes(item) ? solidStar : regularStar}
            onClick={() => onToggleFavorite(item)}
          />
        </SearchItem>
      ))}
    </DeparutesHistoryContainer>
  );
};

export default DepartureHistory;
