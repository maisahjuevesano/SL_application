import {
  SearchHistoryContainer,
  SearchItem,
  SearchDetail,
  Heading3SearchHistory,
  SearchButton,
  ContainerButtons,
  StyledTrashIcon,
  StyledStarIcon,
} from "../styled/StyledHistory";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as solidStar,
  faStar as regularStar,
} from "@fortawesome/free-solid-svg-icons";
import { SearchHistoryProps } from "../models/search";
import { Container } from "../styled/StyledFavoriteList";
import { useTheme } from "../models/theme-context";

export const SearchHistory = ({
  history,
  onSearchSelect,
  onSearchRemove,
  onToggleFavorite,
}: SearchHistoryProps) => {
  const { isToggled } = useTheme();
  return (
    <SearchHistoryContainer $istoggled={isToggled}>
      <Heading3SearchHistory>Tidigare sökningar</Heading3SearchHistory>
      {history.map((search, index) => (
        <SearchItem key={index}>
          <Container>
            <SearchDetail>Från: {search.origin}</SearchDetail>
            <SearchDetail>Till: {search.destination}</SearchDetail>
          </Container>

          <ContainerButtons>
            <SearchButton onClick={() => onSearchSelect(search)}>
              Sök
            </SearchButton>

            <StyledTrashIcon
              icon={faTrashCan}
              onClick={() => onSearchRemove(search)}
            />
            <StyledStarIcon
              icon={search.isFavorite ? solidStar : regularStar}
              onClick={() => onToggleFavorite(search)}
            />
          </ContainerButtons>
        </SearchItem>
      ))}
    </SearchHistoryContainer>
  );
};
