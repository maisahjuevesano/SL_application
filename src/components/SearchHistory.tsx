import {
  SearchHistoryContainer,
  SearchItem,
  SearchDetail,
} from "../styled/StyledHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { SearchHistoryProps } from "../models/search";

export const SearchHistory = ({
  history,
  onSearchSelect,
  onSearchRemove,
}: SearchHistoryProps) => {
  return (
    <SearchHistoryContainer>
      <h3>Tidigare sökningar</h3>
      {history.map((search, index) => (
        <SearchItem key={index}>
          <div onClick={() => onSearchSelect(search)}>
            <SearchDetail>Från: {search.origin}</SearchDetail>
            <SearchDetail>Till: {search.destination}</SearchDetail>
          </div>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => onSearchRemove(search)}
          />
        </SearchItem>
      ))}
    </SearchHistoryContainer>
  );
};
