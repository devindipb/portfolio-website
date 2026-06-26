import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFilePdf,
  FaUsers,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";


const publications = [
  {
    title:
      "Multimodal AI Framework for Personalized and Context-Aware Skin Disease Diagnosis, Monitoring, and Treatment Support",

    publication:
        "SPIE Conference Proceedings (Camera Ready in Progress)",

    conference:
        "International Technical Conference on Computing (ITCC 2026)",

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
    <section
      id="research-publications"
      style={{
        padding: "100px 8%",
        background: "#020617",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          color: "#38bdf8",
          fontWeight: 700,
          marginBottom: "15px",
        }}
      >
        📚 Research Publications
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "18px",
          maxWidth: "850px",
          margin: "0 auto 70px",
          lineHeight: "1.8",
        }}
      >
        Published and accepted academic research contributing to
        Artificial Intelligence, Healthcare Technology and Software
        Engineering.
      </p>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {publications.map((paper, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 20px 45px rgba(56,189,248,.20)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: "rgba(30,41,59,.92)",
              border: "1px solid rgba(56,189,248,.18)",
              borderRadius: "22px",
              padding: "35px",
              transition: ".35s",
              backdropFilter: "blur(15px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(34,197,94,.15)",
                    color: "#22c55e",
                    padding: "8px 16px",
                    borderRadius: "30px",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  <FaCheckCircle />
                  {paper.status}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "30px",
                    lineHeight: "1.4",
                    color: "white",
                  }}
                >
                  {paper.title}
                </h3>

                <p
                  style={{
                    marginTop: "18px",
                    color: "#38bdf8",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <FaAward />
                  {paper.conference}
                  <p
  style={{
    marginTop: "8px",
    color: "#22c55e",
    fontWeight: 600,
    fontSize: "16px",
  }}
>
  📖 {paper.publication}
</p>
                </p>

                <p
                  style={{
                    marginTop: "10px",
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FaCalendarAlt />
                  {paper.year}
                </p>

                <p
                  style={{
                    marginTop: "18px",
                    color: "#cbd5e1",
                    lineHeight: "1.9",
                    fontSize: "16px",
                  }}
                >
                  {paper.abstract}
                  <p
  style={{
    marginTop: "18px",
    padding: "15px",
    background: "rgba(34,197,94,.10)",
    border: "1px solid rgba(34,197,94,.30)",
    borderRadius: "12px",
    color: "#bbf7d0",
    lineHeight: "1.7",
  }}
>
  ✅ {paper.publicationNote}
</p>
                </p>

                <p
                  style={{
                    marginTop: "25px",
                    color: "#38bdf8",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: 600,
                  }}
                >
                  <FaUsers />
                  Authors
                </p>

                <p
                  style={{
                    marginTop: "8px",
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                  }}
                >
                  {paper.authors}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginTop: "30px",
                  }}
                >
                  {paper.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "30px",
                        background: "rgba(56,189,248,.12)",
                        color: "#38bdf8",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "18px",
                    marginTop: "35px",
                  }}
                >
                                     

                  <a
                    href="/research/acceptance-letter.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      style={{
                        padding: "12px 22px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        background: "#22c55e",
                        color: "white",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: ".3s",
                      }}
                    >
                      <FaCheckCircle />
                      Acceptance Letter
                    </button>
                  </a>

                  <a
                    href="/research/review-form.pdf"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      style={{
                        padding: "12px 22px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        background: "#8b5cf6",
                        color: "white",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: ".3s",
                      }}
                    >
                      <FaFilePdf />
                      Review Comments
                    </button>
                  </a>

                  <a
                    href="https://www.itcc.net/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      style={{
                        padding: "12px 22px",
                        borderRadius: "10px",
                        border: "1px solid #38bdf8",
                        cursor: "pointer",
                        background: "transparent",
                        color: "#38bdf8",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: ".3s",
                      }}
                    >
                      <FaExternalLinkAlt />
                      Conference
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPublications;