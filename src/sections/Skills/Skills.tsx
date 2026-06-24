const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 10%",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          marginBottom: "50px",
          fontSize: "40px",
        }}
      >
        Technical Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "20px",
        }}
      >
        {[
          "Java",
          "Spring Boot",
          "React",
          "Node.js",
          "MongoDB",
          "MySQL",
          "AWS",
          "Git & GitHub",
          "Cypress",
          "Research",
        ].map((skill) => (
          <div
            key={skill}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #38bdf8",
            }}
          >
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;