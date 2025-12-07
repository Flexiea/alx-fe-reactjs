import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Required by ALX
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe added successfully!");

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>

      <form className="bg-white shadow-lg rounded-lg p-6 space-y-4" onSubmit={handleSubmit}>
        
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1">Ingredients</label>
          <textarea
            className="w-full border rounded-lg p-2"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List the ingredients"
            rows={4}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-1">Preparation Steps</label>
          <textarea
            className="w-full border rounded-lg p-2"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the steps"
            rows={4}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
