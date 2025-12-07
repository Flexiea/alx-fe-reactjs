import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Recipe Sharing Platform
          </h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-bold text-lg mb-2">Recipe Title</h3>
            <p className="text-gray-600">Short description of the recipe...</p>
          </div>
        </div>
      </main>
      <footer className="bg-white shadow-inner py-4 mt-auto text-center text-gray-500">
        &copy; 2025 Recipe Sharing Platform
      </footer>
    </div>
  )
}

export default App
