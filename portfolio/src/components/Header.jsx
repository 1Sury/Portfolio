// src/components/Header.jsx
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Shubhanshi Suryavanshi</h1>
        </div>
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
