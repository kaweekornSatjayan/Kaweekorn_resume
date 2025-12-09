// Import section components
import Header from './components/sections/Header';
import About from './components/sections/About';
import Skills from './components/sections/Skills';

function App() {
  return (
    // Global Container with proper Tailwind background class
    <div className="min-h-screen bg-cream w-full">
      
      {/* Header spans full width */}
      <Header />
      
      {/* Main content full width */}
      <div className="w-full">
        
        {/* Main Content */}
        <main className="">
          <About />
          <Skills />
          
          {/* TODO: Add Experience, Projects, Contact sections */}
          
        </main>
        
      </div>

      {/* Footer */}
      <footer className="bg-primary-dark text-white text-center py-xl">
        <p>&copy; 2025 Kaweekorn Satjayan. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
