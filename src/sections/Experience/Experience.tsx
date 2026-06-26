import {
  FaBriefcase,
  FaBrain,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaBriefcase />,
    title: "Web Development Intern",
    company: "Sri Lanka Customs - ICT Branch",
    year: "2025",
    duration: "6 Months",
    color: "#38bdf8",
    description: [
      "Developed front-end interfaces for the Online Appeal Web Tool using Angular.",
      "Designed UI/UX prototypes using Figma.",
      "Collaborated with stakeholders for requirement gathering and system analysis.",
      "Performed testing, debugging and usability improvements.",
      "Used GitHub for version control and collaboration.",
      "Participated in Agile stand-up meetings.",
    ],
    skills: ["Angular", "Figma", "Git", "Testing", "Agile"],
  },
  {
    icon: <FaBrain />,
    title: "AI Research Contributor",
    company:
      "Multimodal AI Framework for Personalized and Culturally-Aware Skin Disease Diagnosis",
    year: "Final Year Research Project",
    color: "#a855f7",
    description: [
      "Conducted literature review and research analysis in AI-powered healthcare systems.",
      "Worked on multimodal deep learning techniques.",
      "Performed dataset preprocessing and validation.",
      "Contributed to model evaluation and performance analysis.",
      "Prepared technical reports and research documentation.",
    ],
    skills: ["Python", "TensorFlow", "Deep Learning", "CNN", "Research"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-subtitle">
        Successfully completed a 6-month internship at the ICT Branch of Sri Lanka
        Customs, contributing to real-world software development, UI/UX design,
        testing, and collaborative Agile projects.
      </p>

      <div className="timeline-wrapper">
        <div className="timeline-line" />
        <div className="timeline-list">
          {experiences.map((item, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-icon">
                <div
                  className="timeline-icon-inner"
                  style={{
                    background: `${item.color}20`,
                    border: `3px solid ${item.color}`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
              </div>

              <div className="timeline-card experience-card">
                <div className="timeline-card-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-meta">
                      <FaBuilding /> {item.company}
                    </p>
                    {"duration" in item && item.duration && (
                      <p className="timeline-meta">
                        <FaGraduationCap /> Duration: {item.duration}
                      </p>
                    )}
                  </div>
                  <span className="timeline-year">{item.year}</span>
                </div>

                <ul className="experience-description">
                  {item.description.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>

                <div className="experience-skills">
                  {item.skills.map((skill) => (
                    <span key={skill} className="experience-skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
