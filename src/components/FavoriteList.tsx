import { Search } from "../models/search";

interface FavoriteListProps {
  favorites: Search[];
  onFavoriteSelect: (search: Search) => void;
}

const FavoriteList = ({ favorites, onFavoriteSelect }: FavoriteListProps) => {
  return (
    <div>
      <h3>Favoritsökningar</h3>
      {favorites.map((search, index) => (
        <div key={index} onClick={() => onFavoriteSelect(search)}>
          Från: {search.origin}, Till: {search.destination}
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
