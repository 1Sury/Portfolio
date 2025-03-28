// src/components/Footer.jsx
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Shubhanshi Suryavanshi</h3>
            <p>Frontend Developer & Product Manager</p>
          </div>
          
          <div className="footer-nav">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/shubhanshi-suryavanshi-482821241/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/1Sury" target="_blank" rel="noopener noreferrer" className="social-icon">
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shubhanshi Suryavanshi. All rights reserved.</p>
          <p>Made with React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;