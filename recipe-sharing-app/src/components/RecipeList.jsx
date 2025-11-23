// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore";
import { useEffect } from "react";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Re-run filtering whenever search changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const listToShow = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>

      {listToShow.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {listToShow.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
