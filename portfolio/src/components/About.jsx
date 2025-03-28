// src/components/About.jsx
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/profile-image.jpg" alt="Shubhanshi Suryavanshi" className="profile-image" />
        </div>
        <div className="about-text">
          <h3>Hello, I'm Shubhanshi Suryavanshi</h3>
          <p>
            I am a passionate developer with expertise in frontend technologies and a growing knowledge of backend development. 
            I specialize in building responsive and user-friendly web applications using React and other modern web technologies.
          </p>
          <p>
            With a background in both technical development and product management, I bring a unique perspective to projects 
            that combines technical know-how with a strong understanding of user needs and business goals.
          </p>
          <p>
            I'm currently focused on AI and voice technologies, particularly developing voice AI agents for customer support 
            that can enhance business operations and customer experiences.
          </p>
          <div className="about-buttons">
            <a href="#contact" className="btn">Contact Me</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;