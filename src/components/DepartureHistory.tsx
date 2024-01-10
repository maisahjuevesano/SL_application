import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  DeparutesHistoryContainer,
  Heading3DepartureHistory,
  SearchItem,
} from "../styled/StyledDepartureHistory";

interface DepartureHistoryProps {
  searchHistory: string[];
  onSelectHistoryItem: (item: string) => void;
  onRemoveHistoryItem: (item: string) => void;
}

const DepartureHistory = ({
  searchHistory,
  onSelectHistoryItem,
  onRemoveHistoryItem,
}: DepartureHistoryProps) => {
  return (
    <DeparutesHistoryContainer>
      <Heading3DepartureHistory>Tidigare Sökningar</Heading3DepartureHistory>
      {searchHistory.map((item, index) => (
        <SearchItem key={index}>
          <span onClick={() => onSelectHistoryItem(item)}>{item}</span>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => onRemoveHistoryItem(item)}
          />
        </SearchItem>
      ))}
    </DeparutesHistoryContainer>
  );
};

export default DepartureHistory;
