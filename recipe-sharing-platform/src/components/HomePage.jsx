import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard'
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
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
