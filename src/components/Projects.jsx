import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Food Tech Website",
      description: "Developed an interactive and user-friendly platform for browsing food items, categories and product details. Implemented responsive design and optimized page performance to improve accessibility and engagement.",
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/vipulsingh36/Foodtech"
    },
    {
      title: "AI Travel Journal Generator",
      description: "Built an AI-powered system that generates personalized travel journals using NLP and user trip details. Integrated weather, location, and activity data to create engaging travel narratives.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/vipulsingh36/ai-travel-journal-generator"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive personal portfolio website to showcase my skills, projects, and educational achievements. Designed with dynamic animations, sleek styling, and interactive components.",
      techStack: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/vipulsingh36/portfolio"
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="grid-2">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h3 className="project-title">
              {project.title}
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Source">
                <Github size={20} className="contact-icon" style={{transition: 'color 0.3s'}} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-purple)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} />
              </a>
            </h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.techStack.map((tech, i) => (
                <span key={i} className="badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
