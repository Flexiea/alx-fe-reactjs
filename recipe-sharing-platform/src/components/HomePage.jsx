<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {recipes.map(recipe => (
    <div
      key={recipe.id}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
    >
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm">{recipe.summary}</p>
        <a
          href="#"
          className="mt-2 inline-block text-blue-600 hover:underline text-sm"
        >
          View Recipe
        </a>
      </div>
    </div>
  ))}
</div>
