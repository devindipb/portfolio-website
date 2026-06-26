import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaAward,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const publications = [
  {
    title:
      "Multimodal AI Framework for Personalized and Context-Aware Skin Disease Diagnosis, Monitoring, and Treatment Support",
    publication: "SPIE Conference Proceedings (Camera Ready in Progress)",
    conference: "International Technical Conference on Computing (ITCC 2026)",
    publicationNote:
      "Accepted for publication. Camera-ready version currently in progress.",
    status: "Accepted for Publication",
    year: "2026",
    authors:
      "Pabodha Devindi, Oshidee Prarthana Wijesinghe, Mayusha Mihisandali, Lakshopan Ravindran, Lokesha Weerasinghe, Akshi Silva",
    abstract:
      "This research introduces a multimodal AI framework that combines image analysis, patient metadata, and contextual information to improve personalized skin disease diagnosis and treatment support while reducing bias across different skin tones.",
    technologies: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "CNN",
      "Domain Adaptation",
      "AI",
      "Healthcare",
    ],
    acceptance: "/research/acceptance-letter.pdf",
    review: "/research/review-form.pdf",
  },
];

const ResearchPublications = () => {
  return (
    <section id="research-publications" className="research-section">
      <h2 className="section-title">Research Publications</h2>
      <p className="section-subtitle">
        Published and accepted academic research contributing to Artificial
        Intelligence, Healthcare Technology, and Software Engineering.
      </p>

      <div className="publication-list">
        {publications.map((paper, index) => (
          <article key={index} className="publication-card">
            <span className="publication-status">
              <FaCheckCircle /> {paper.status}
            </span>

            <h3 className="publication-title">{paper.title}</h3>

            <div className="publication-meta-row">
              <span>
                <FaAward /> {paper.conference}
              </span>
              <span className="publication-publication">{paper.publication}</span>
            </div>

            <div className="publication-meta-row">
              <span>
                <FaCalendarAlt /> {paper.year}
              </span>
            </div>

            <p className="publication-abstract">{paper.abstract}</p>

            <div className="publication-highlight">{paper.publicationNote}</div>

            <div className="publication-authors-title">
              <FaUsers /> Authors
            </div>
            <p className="publication-authors">{paper.authors}</p>

            <div className="publication-tech">
              {paper.technologies.map((tech) => (
                <span key={tech} className="publication-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <div className="publication-actions">
              <a
                href={paper.acceptance}
                target="_blank"
                rel="noreferrer"
                className="publication-action primary"
              >
                <FaCheckCircle /> Acceptance Letter
              </a>
              <a
                href={paper.review}
                target="_blank"
                rel="noreferrer"
                className="publication-action secondary"
              >
                <FaExternalLinkAlt /> Review Comments
              </a>
              <a
                href="https://www.itcc.net/"
                target="_blank"
                rel="noreferrer"
                className="publication-action ghost"
              >
                Conference
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResearchPublications;
