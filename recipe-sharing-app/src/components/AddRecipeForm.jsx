import { useState } from "react";
import { useRecipeStore } from "../store/useRecipeStore";
import { nanoid } from "nanoid";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) return;

    addRecipe({
      id: nanoid(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>
      <h2>Add a Recipe</h2>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />

      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
