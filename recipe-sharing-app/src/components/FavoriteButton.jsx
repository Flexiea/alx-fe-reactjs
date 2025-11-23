import { useRecipeStore } from "../store/useRecipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}>
      {isFavorite ? "★ Unfavorite" : "☆ Favorite"}
    </button>
  );
};

export default FavoriteButton;
