import {
  SearchHistoryContainer,
  SearchItem,
  SearchDetail,
} from "../styled/StyledHistory";

interface SearchHistoryProps {
  history: Array<{ origin: string; destination: string }>;
}

export const SearchHistory = ({ history }: SearchHistoryProps) => {
  return (
    <SearchHistoryContainer>
      <h3>Tidigare sökningar</h3>
      {history.map((search, index) => (
        <SearchItem key={index}>
          <SearchDetail>Från: {search.origin}</SearchDetail>
          <SearchDetail>Till: {search.destination}</SearchDetail>
        </SearchItem>
      ))}
    </SearchHistoryContainer>
  );
};
