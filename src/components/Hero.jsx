import { Github, Linkedin, ArrowRight, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow animate-fade-in delay-300"></div>
      <div className="hero-content">
        <div className="profile-img-container animate-fade-in">
          <img src="/profile.jpg" alt="Vipul Kumar Singh" className="profile-img" />
        </div>
        <h2 className="animate-fade-in delay-100">Hi, I'm</h2>
        <h1 className="animate-fade-in delay-200">Vipul Kumar Singh</h1>
        <h2 className="animate-fade-in delay-300" style={{color: 'var(--text-primary)'}}>Full Stack Developer</h2>
        <p className="animate-fade-in delay-300">
          Building scalable web applications and AI-powered solutions.
        </p>
        
        <div className="hero-actions animate-fade-in delay-300">
          <a href="https://drive.google.com/file/d/1nbiVgIavjbsOlSbzqURBY6ddq4HzHIWb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))' }}>
            Download Resume <Download size={18} />
          </a>
          <a href="#projects" className="btn btn-outline" style={{ border: '1px solid var(--accent-blue)', color: 'var(--text-primary)' }}>
            View Projects <ArrowRight size={18} />
          </a>
        </div>
        
        <div className="social-links animate-fade-in delay-300">
          <a href="https://linkedin.com/in/vipul-kumar-singh82" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/vipulsingh36" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
