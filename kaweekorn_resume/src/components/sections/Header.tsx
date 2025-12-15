import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full py-1 md:py-2 lg:py-2 bg-cream sticky top-0 z-50 shadow-sm">
      <div className="max-w-container mx-auto px-3 sm:px-4 md:px-8 lg:px-margin">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-navy font-serif">
              KS.
            </h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 font-mono text-sm md:text-base text-navy">
              <li>
                <a
                  href="#about"
                  className="text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'about')}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#archive"
                  className="text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'archive')}
                >
                  Archive
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'activities')}
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'skills')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'education')}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button 
            className="md:hidden text-charcoal hover:text-gold transition-colors p-1"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2">
            <ul className="flex flex-col space-y-2 font-mono text-xs text-navy">
              <li>
                <a
                  href="#about"
                  className="block text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'about')}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#archive"
                  className="block text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'archive')}
                >
                  Archive
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="block text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'activities')}
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'skills')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'education')}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block text-navy hover:text-gold transition-colors"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
