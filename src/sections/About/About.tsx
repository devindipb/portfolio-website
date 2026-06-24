const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "100px 10%",
        background: "#020617",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "40px",
          color: "#38bdf8",
        }}
      >
        About Me
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "2",
          color: "#cbd5e1",
          textAlign: "justify",
        }}
      >
        I am Pabodha Devindi, a Final Year BSc (Hons) Information Technology
        undergraduate at SLIIT with a strong passion for Full Stack
        Development, Cloud Computing, Software Engineering, and Artificial
        Intelligence Research. I have experience building modern web
        applications using React, Node.js, Java, Spring Boot, MongoDB and SQL.
        In addition to software development, I actively engage in research,
        focusing on AI-powered healthcare solutions and culturally-aware skin
        disease diagnosis systems. My goal is to contribute to innovative
        technology solutions while continuously expanding my technical and
        research expertise.
      </p>
    </section>
  );
};

export default About;