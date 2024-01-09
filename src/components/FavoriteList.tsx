import { Search } from "../models/search"; // Importera din Search interface

interface FavoriteListProps {
  favorites: Search[];
}

export const FavoriteList = ({ favorites }: FavoriteListProps) => {
  return (
    <div>
      <h3>Favoritsökningar</h3>
      {favorites.map((search, index) => (
        <div key={index}>
          Från: {search.origin}, Till: {search.destination}
          {/* Lägg till ytterligare funktionalitet om nödvändigt */}
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
