import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="card">
          <a href="mailto:vipulrajput8235@gmail.com" className="contact-item">
            <Mail className="contact-icon" size={24} />
            <div>
              <p className="timeline-subtitle" style={{marginBottom: 0}}>Email</p>
              <p className="timeline-title" style={{fontSize: '1rem'}}>vipulrajput8235@gmail.com</p>
            </div>
          </a>
          
          <a href="tel:+918235347836" className="contact-item">
            <Phone className="contact-icon" size={24} />
            <div>
              <p className="timeline-subtitle" style={{marginBottom: 0}}>Phone</p>
              <p className="timeline-title" style={{fontSize: '1rem'}}>+91-8235347836</p>
            </div>
          </a>
          
          <a href="https://linkedin.com/in/vipul-kumar-singh82" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Linkedin className="contact-icon" size={24} />
            <div>
              <p className="timeline-subtitle" style={{marginBottom: 0}}>LinkedIn</p>
              <p className="timeline-title" style={{fontSize: '1rem'}}>linkedin.com/in/vipul-kumar-singh82</p>
            </div>
          </a>

          <a href="https://github.com/vipulsingh36" target="_blank" rel="noopener noreferrer" className="contact-item">
            <Github className="contact-icon" size={24} />
            <div>
              <p className="timeline-subtitle" style={{marginBottom: 0}}>GitHub</p>
              <p className="timeline-title" style={{fontSize: '1rem'}}>github.com/vipulsingh36</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
