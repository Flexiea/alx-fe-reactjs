import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">

      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Ingredients (one per line)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Steps (one per line)</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border px-2 py-1 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
}
