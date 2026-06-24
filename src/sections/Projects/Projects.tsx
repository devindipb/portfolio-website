const Projects = () => {
  const projects = [
    {
      title: "Online Medicine Ordering System",
      tech: "React, Node.js, Express, MongoDB",
    },
    {
      title: "Patient Management System",
      tech: "MERN Stack",
    },
    {
      title: "Smart Campus Operations Hub",
      tech: "React, Spring Boot, MySQL",
    },
    {
      title: "Multimodal AI Framework for Skin Disease Diagnosis",
      tech: "AI Research Project",
    },
    {
      title: "AWS Cloud Web Application",
      tech: "AWS EC2, RDS, Load Balancer",
    },
  ];

  return (
    <section
      id="projects"
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
        Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "15px",
              border: "1px solid #38bdf8",
            }}
          >
            <h3>{project.title}</h3>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
              }}
            >
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;