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
  return (
    <DeparutesHistoryContainer $istoggled>
      <Heading3DepartureHistory $istoggled>
        Tidigare Sökningar
      </Heading3DepartureHistory>
      {searchHistory.map((item, index) => (
        <SearchItem key={index}>
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
