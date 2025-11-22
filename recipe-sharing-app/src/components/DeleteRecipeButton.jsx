// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from "../store/useRecipeStore";
import { useNavigate } from "react-router-dom"; // <-- This is required

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // <-- This must be called

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // Redirect to home page or main route
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
