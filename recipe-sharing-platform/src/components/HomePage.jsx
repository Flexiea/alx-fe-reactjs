import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import recipesData from '../data.json'

function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setRecipes(recipesData)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Recipes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
