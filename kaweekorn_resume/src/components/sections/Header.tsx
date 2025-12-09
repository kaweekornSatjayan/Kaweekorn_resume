import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-2.25 md:py-2 lg:py-2 bg-cream">
      <div className="max-w-container mx-auto px-2 sm:px-6 md:px-8 lg:px-margin">
        <div className="flex justify-between items-center">
          {/*Name Element */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-navy font-serif">
              KS.
            </h1>
          </div>

          {/* Navigation Bar Element */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 font-mono text-sm md:text-base text-navy">
              <li>
                <a
                  href="#about"
                  className="text-navy hover:text-gold transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-navy hover:text-gold transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-navy hover:text-gold transition-colors"
                >
                  Archieve
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-navy hover:text-gold transition-colors"
                >
                 Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-navy hover:text-gold transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-navy hover:text-gold transition-colors"
                >
                 Downlod CV
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-charcoal hover:text-gold transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
