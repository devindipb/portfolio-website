import {
  FaBriefcase,
  FaBrain,
  FaCalendarAlt,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";
import internshipLetter from "../../assets/documents/internship-letter.pdf";

const Experience = () => {
  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "Web Development Intern",
      company: "Sri Lanka Customs – ICT Branch",
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

      skills: [
        "Angular",
        "Figma",
        "Git",
        "Testing",
        "Agile",
      ],
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

      skills: [
        "Python",
        "TensorFlow",
        "Deep Learning",
        "CNN",
        "Research",
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "100px 8%",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          fontWeight: 700,
          color: "#38bdf8",
          marginBottom: "70px",
        }}
      >
        💼 Professional Experience
      </h2>

      <p
  style={{
    textAlign: "center",
    color: "#94a3b8",
    fontSize: "17px",
    marginTop: "-45px",
    marginBottom: "60px",
    lineHeight: "1.8",
  }}
>
  Successfully completed a 6-month internship at the ICT Branch of
  Sri Lanka Customs, contributing to real-world software development,
  UI/UX design, testing, and collaborative Agile projects.
</p>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Timeline Line */}

        <div
          style={{
            position: "absolute",
            left: "35px",
            top: 0,
            bottom: 0,
            width: "3px",
            background:
              "linear-gradient(#38bdf8,#0ea5e9,#38bdf8)",
            opacity: ".4",
          }}
        />

        {experiences.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(56,189,248,.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              display: "flex",
              gap: "25px",
              marginBottom: "40px",
              transition: ".35s",
            }}
          >
            {/* Timeline Icon */}

            <div
              style={{
                minWidth: "70px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: `${item.color}20`,
                  border: `3px solid ${item.color}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "30px",
                  color: item.color,
                  zIndex: 5,
                }}
              >
                {item.icon}
              </div>
            </div>

            {/* Experience Card */}

            <div
              style={{
                flex: 1,
                background: " rgba(30,41,59,.88)",
                backdropFilter: "blur(18px)",
                borderRadius: "22px",
                padding: "30px",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "18px",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "30px",
                      color: "white",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#38bdf8",
                      marginTop: "10px",
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <FaBuilding />
                    {item.company}
                  </p>

                  {item.duration && (
  <p
    style={{
      color: "#94a3b8",
      marginTop: "8px",
      marginBottom: "0",
      fontSize: "15px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }}
  >
    <FaGraduationCap />
    Internship Duration: {item.duration}
  </p>
)}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: `${item.color}20`,
                    color: item.color,
                    padding: "8px 18px",
                    borderRadius: "30px",
                    fontWeight: "700",
                  }}
                >
                  <FaCalendarAlt />
                  {item.year}
                </div>
              </div>

              <ul
                style={{
                  color: "#cbd5e1",
                  lineHeight: "2",
                  paddingLeft: "20px",
                  marginBottom: "25px",
                }}
              >
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "30px",
                      background: `${item.color}20`,
                      color: item.color,
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {index === 0 && (
  <div
    style={{
      marginTop: "28px",
    }}
  >
    <a
      href={internshipLetter}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "#38bdf8",
        color: "#ffffff",
        textDecoration: "none",
        padding: "12px 22px",
        borderRadius: "10px",
        fontWeight: 600,
        transition: ".3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#0ea5e9";
        e.currentTarget.style.transform =
          "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#38bdf8";
        e.currentTarget.style.transform =
          "translateY(0)";
      }}
    >
      📄 View Internship Completion Letter
    </a>
  </div>
)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;