export interface Search {
  origin: string;
  destination: string;
}

export interface SearchHistoryProps {
  history: Array<{ origin: string; destination: string }>;
  onSearchSelect: (search: { origin: string; destination: string }) => void;
  onSearchRemove: (search: { origin: string; destination: string }) => void;
}
