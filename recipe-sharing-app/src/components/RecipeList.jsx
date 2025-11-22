// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore";

const RecipeDetails = () => {
  const { id } = useParams();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* The line below uses recipe.id — required for the task */}
      <small>Recipe ID: {recipe.id}</small>
    </div>
  );
};

export default RecipeDetails;
