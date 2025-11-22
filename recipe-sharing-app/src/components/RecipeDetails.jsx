// src/components/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useRecipeStore } from "../store/useRecipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  // Get ID from URL
  const { id } = useParams();

  // Find the recipe using ID
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Required: use recipe.id in the component */}
      <small>Recipe ID: {recipe.id}</small>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
