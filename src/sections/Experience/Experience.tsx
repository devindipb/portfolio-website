const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 10%",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Experience
      </h2>

      <div
        style={{
          display: "grid",
          gap: "25px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >

        {/* Internship */}

        <div
          style={{
            background: "#1e293b",
            border: "1px solid #38bdf8",
            borderRadius: "15px",
            padding: "30px",
          }}
        >
          <h3 style={{ color: "#38bdf8" }}>
            Web Development Intern
          </h3>

          <h4>Sri Lanka Customs – ICT Branch</h4>

          <p style={{ color: "#94a3b8" }}>
            2025
          </p>

          <ul
            style={{
              marginTop: "15px",
              lineHeight: "2",
            }}
          >
            <li>
              Developed front-end interfaces for the Online Appeal Web Tool using Angular.
            </li>

            <li>
              Designed UI/UX prototypes and user flows using Figma.
            </li>

            <li>
              Collaborated with Appeals Branch stakeholders for requirement gathering and system analysis.
            </li>

            <li>
              Performed testing, debugging and usability improvements.
            </li>

            <li>
              Used GitHub for version control, code reviews and collaboration.
            </li>

            <li>
              Participated in Agile stand-up meetings and project discussions.
            </li>
          </ul>
        </div>

        {/* Research */}

        <div
          style={{
            background: "#1e293b",
            border: "1px solid #38bdf8",
            borderRadius: "15px",
            padding: "30px",
          }}
        >
          <h3 style={{ color: "#38bdf8" }}>
            AI Research Contributor
          </h3>

          <h4>
            Multimodal AI Framework for Personalized and
            Culturally-Aware Skin Disease Diagnosis,
            Monitoring and Treatment Support
          </h4>

          <p style={{ color: "#94a3b8" }}>
            Final Year Research Project
          </p>

          <ul
            style={{
              marginTop: "15px",
              lineHeight: "2",
            }}
          >
            <li>
              Conducted literature review and research analysis in AI-based healthcare systems.
            </li>

            <li>
              Worked on multimodal learning techniques combining visual and contextual data.
            </li>

            <li>
              Contributed to model design, evaluation and performance analysis.
            </li>

            <li>
              Performed dataset preparation, preprocessing and validation.
            </li>

            <li>
              Worked with Deep Learning concepts including ConvNeXt architectures and AI model evaluation.
            </li>

            <li>
              Prepared technical documentation, research findings and system reports.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;