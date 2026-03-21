import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    { title: "Cloud Computing", issuer: "NPTEL", downloadLink: "https://drive.google.com/file/d/1_KA2-ARm-SPDbm_jhqJZ45CQ_ufN51gt/view?usp=sharing" },
    { title: "Java Programming", issuer: "Neocolab", downloadLink: "/java_programming.pdf" },
    { title: "Object Oriented Programming", issuer: "Neocolab", downloadLink: "/oop.pdf" }
  ];

  return (
    <section id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="grid-3">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-item">
            <Award size={24} className="contact-icon" />
            <div>
              {cert.downloadLink ? (
                <a href={cert.downloadLink} download={`${cert.title.replace(/\s+/g, '_')}.pdf`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 className="timeline-title" style={{fontSize: '1.1rem', transition: 'color 0.3s'}} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                    {cert.title}
                  </h3>
                </a>
              ) : (
                <h3 className="timeline-title" style={{fontSize: '1.1rem'}}>{cert.title}</h3>
              )}
              <p className="timeline-subtitle" style={{marginBottom: 0}}>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
