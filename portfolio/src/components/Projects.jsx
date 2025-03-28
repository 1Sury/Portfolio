// src/components/Projects.jsx
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with React and CSS to showcase my projects and skills. Features smooth animations, responsive design, and a contact form.",
      image: "portfolio.jpg",
      status: "Completed",
      tech: ["React", "CSS", "Responsive Design"],
      github: "https://github.com/1Sury",
      demo: null,
    },
    {
      id: 2,
      title: "Task Management Dashboard with Authentication",
      description:
        "A task management dashboard built using React-Redux with authentication and a weather widget.",
      image: "task-management.jpg",
      status: "Completed",
      tech: ["React", "Redux", "Authentication"],
      github: "https://github.com/1Sury",
      demo: "https://todo-list-seven-sable-52.vercel.app/",
    },
    {
      id: 3,
      title: "React Assignment App",
      description:
        "A React-based project demonstrating UI development, state management, and interactivity.",
      image: "react-assignment.jpg",
      status: "Completed",
      tech: ["React", "CSS", "State Management"],
      github: null,
      demo: "https://react-assignment-six-sage.vercel.app/",
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <div className="placeholder-project">
                <span>{project.title.charAt(0)}</span>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-status">{project.status}</div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span className="tech-tag" key={index}>{tech}</span>
                ))}
              </div>
              
              {project.target && (
                <p className="project-target">Target: {project.target}</p>
              )}
              
              <div className="project-links">
                {project.github && (
                  <a 
                    href={project.github} 
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    className="project-link demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;