import {
  SearchHistoryContainer,
  SearchItem,
  SearchDetail,
  Heading3SearchHistory,
  SearchButton,
  ContainerButtons,
} from "../styled/StyledHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as solidStar,
  faStar as regularStar,
} from "@fortawesome/free-solid-svg-icons";
import { SearchHistoryProps } from "../models/search";

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
          <div>
            <SearchDetail>Från: {search.origin}</SearchDetail>
            <SearchDetail>Till: {search.destination}</SearchDetail>
          </div>

          <ContainerButtons>
            <SearchButton onClick={() => onSearchSelect(search)}>
              Sök
            </SearchButton>

            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => onSearchRemove(search)}
            />
            <FontAwesomeIcon
              icon={search.isFavorite ? solidStar : regularStar}
              onClick={() => onToggleFavorite(search)}
            />
          </ContainerButtons>
        </SearchItem>
      ))}
    </SearchHistoryContainer>
  );
};
