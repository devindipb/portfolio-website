const Contact = () => {
  return (
    <section
      id="contact"
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
        Contact Me
      </h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
          lineHeight: "2",
          fontSize: "18px",
        }}
      >
        <p>
          📧 Email:
          <br />
          <a
            href="mailto:pabodhadevindi2002@gmail.com"
            style={{ color: "#38bdf8" }}
          >
            pabodhadevindi2002@gmail.com
          </a>
        </p>

        <p>
          💼 LinkedIn:
          <br />
          <a
            href="https://www.linkedin.com/in/pabodha-devindi-157408314"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8" }}
          >
            View LinkedIn Profile
          </a>
        </p>

        <p>
          💻 GitHub:
          <br />
          <a
            href="https://github.com/devindipb"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#38bdf8" }}
          >
            View GitHub Profile
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;