const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Ubuntu", "MySQL", "Oracle"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Player", "Adaptability"]
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="grid-2">
        {skillCategories.map((category, index) => (
          <div key={index} className="card skills-category">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
