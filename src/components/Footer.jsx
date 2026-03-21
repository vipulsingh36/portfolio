import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      <div className="social-links" style={{marginBottom: '1.5rem'}}>
        <a href="mailto:vipulrajput8235@gmail.com" aria-label="Email">
          <Mail size={24} />
        </a>
        <a href="https://linkedin.com/in/vipul-kumar-singh82" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/vipulsingh36" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Vipul Kumar Singh. All Rights Reserved.</p>
      <p style={{color: 'var(--accent-purple)'}}>Designed and developed by Vipul Kumar Singh</p>
    </footer>
  );
};

export default Footer;
