// File: src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <ThemeProvider>
      <div className="app">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <section id="about" className={activeSection === 'about' ? 'active' : ''}>
            <About />
          </section>
          <section id="skills" className={activeSection === 'skills' ? 'active' : ''}>
            <Skills />
          </section>
          <section id="projects" className={activeSection === 'projects' ? 'active' : ''}>
            <Projects />
          </section>
          <section id="contact" className={activeSection === 'contact' ? 'active' : ''}>
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;