import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import recipesData from '../data.json'

function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    const found = recipesData.find(r => r.id === parseInt(id))
    setRecipe(found)
  }, [id])

  if (!recipe) return <p className="text-center py-10">Recipe not found.</p>

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          <section className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600">
              {recipe.ingredients
                ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
                : <li>Ingredients not listed</li>
              }
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-600">
              {recipe.instructions
                ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
                : <li>Instructions not provided</li>
              }
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
