// src/components/Skills.jsx
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'React', level: 90 },
    { name: 'Redux', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'jQuery', level: 80 },
    { name: 'Ant Design', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Java', level: 65 },
    { name: 'SQL', level: 75 },
    { name: 'AI & ML (SLM)', level: 65 },
    { name: 'Paper.js', level: 70 },
  ];

  const nonTechnicalSkills = [
    { name: 'Product Management', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Project Management', level: 85 },
    { name: 'Social Media Management', level: 90 },
    { name: 'Problem-Solving', level: 85 },
    { name: 'Analytical Thinking', level: 85 },
  ];

  return (
    <div className="skills">
      <h2>My Skills</h2>
      
      <div className="skills-container">
        <div className="skills-column">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-column">
          <h3>Non-Technical Skills</h3>
          <div className="skills-list">
            {nonTechnicalSkills.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress non-technical" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;