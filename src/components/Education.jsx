const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab",
      score: "CGPA: 7.2"
    },
    {
      degree: "Diploma",
      institution: "Lovely Professional University",
      score: "CGPA: 7.3"
    },
    {
      degree: "Matriculation",
      institution: "DAV Public School, Bihar",
      score: "Percentage: 73%"
    }
  ];

  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="card">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <h3 className="timeline-title">{edu.degree}</h3>
            <p className="timeline-subtitle">{edu.institution}</p>
            <p className="timeline-desc font-medium">{edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
