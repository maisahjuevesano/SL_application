import {
  SearchHistoryContainer,
  SearchItem,
  SearchDetail,
  Heading3SearchHistory,
} from "../styled/StyledHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { SearchHistoryProps } from "../models/search";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export const SearchHistory = ({
  history,
  onSearchSelect,
  onSearchRemove,
  onToggleFavorite,
}: SearchHistoryProps) => {
  return (
    <SearchHistoryContainer>
      <Heading3SearchHistory>Tidigare sökningar</Heading3SearchHistory>
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
          <FontAwesomeIcon
            icon={search.isFavorite ? solidStar : regularStar}
            onClick={() => onToggleFavorite(search)}
          />
        </SearchItem>
      ))}
    </SearchHistoryContainer>
  );
};
