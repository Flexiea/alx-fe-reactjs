import HomePage from './components/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-600 text-center">
            Recipe Sharing Platform
          </h1>
        </div>
      </header>

      <main className="flex-1">
        <HomePage />
      </main>

      <footer className="bg-white shadow-inner py-4 mt-auto text-center text-gray-500">
        &copy; 2025 Recipe Sharing Platform
      </footer>
    </div>
  )
}

export default App
