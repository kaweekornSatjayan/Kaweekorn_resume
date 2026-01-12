// Import section components
import Header from './components/sections/Header';
import About from './components/sections/About';
import UXUIWorks from './components/sections/UXUIWorks';
import Skills from './components/sections/Skills';
import Archieve from './components/sections/Archieve';
import Activities from './components/sections/Activities';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

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
          <UXUIWorks />
          <Archieve />
          <Activities />
          <Skills />
          <Education />
          <Contact />
          
          {/* TODO: Add Experience, Projects sections */}
          
        </main>
        
      </div>

      {/* Footer */}
      <footer className="font-heading py-4 bg-cream text-black text-center py-md border-t border-gray-200">
        <p className="text-sm font-playfair">&copy; 2025 Kaweekorn Satjayan</p>
      </footer>
    </div>
  )
}

export default App
