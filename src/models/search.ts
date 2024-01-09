export interface Search {
  origin: string;
  destination: string;
  isFavorite?: boolean;
}

export interface SearchHistoryProps {
  history: Search[];
  onSearchSelect: (search: Search) => void;
  onSearchRemove: (search: Search) => void;
  onToggleFavorite: (search: Search) => void;
}
