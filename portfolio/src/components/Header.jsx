// src/components/Header.jsx
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Shubhanshi Suryavanshi</h1>
        </div>
        
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => handleNavClick('skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
            <li className="theme-toggle-container">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;