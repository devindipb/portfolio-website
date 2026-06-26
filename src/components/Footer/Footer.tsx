
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const iconStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "rgba(56,189,248,.12)",
    color: "#38bdf8",
    display: "flex",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    fontSize: "18px",
    transition: "0.3s ease",
    textDecoration: "none",
  };

  return (
    <footer
      style={{
        background:
          "linear-gradient(90deg,#020617,#081327,#020617)",
        color: "white",
        textAlign: "center",
        padding: "45px 20px 28px",
        borderTop: "1px solid rgba(56,189,248,.25)",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "30px",
          color: "#38bdf8",
          fontWeight: 700,
          letterSpacing: ".4px",
        }}
      >
        Pabodha Devindi
      </h2>

      <p
        style={{
          marginTop: "12px",
          color: "#cbd5e1",
          fontSize: "16px",
          lineHeight: "1.7",
        }}
      >
        Full Stack Developer • Cloud Enthusiast
        <br />
        AI Researcher • Software Engineer
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        <a
          href="https://github.com/devindipb"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-4px) scale(1.08)";
            e.currentTarget.style.background =
              "#38bdf8";
            e.currentTarget.style.color = "#020617";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0) scale(1)";
            e.currentTarget.style.background =
              "rgba(56,189,248,.12)";
            e.currentTarget.style.color = "#38bdf8";
          }}
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/pabodha-devindi-157408314"
          target="_blank"
          rel="noreferrer"
          style={iconStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-4px) scale(1.08)";
            e.currentTarget.style.background =
              "#38bdf8";
            e.currentTarget.style.color = "#020617";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0) scale(1)";
            e.currentTarget.style.background =
              "rgba(56,189,248,.12)";
            e.currentTarget.style.color = "#38bdf8";
          }}
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:pabodhadevindi2002@gmail.com"
          style={iconStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-4px) scale(1.08)";
            e.currentTarget.style.background =
              "#38bdf8";
            e.currentTarget.style.color = "#020617";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0) scale(1)";
            e.currentTarget.style.background =
              "rgba(56,189,248,.12)";
            e.currentTarget.style.color = "#38bdf8";
          }}
        >
          <FaEnvelope />
        </a>
      </div>

      <div
        style={{
          width: "110px",
          height: "2px",
          background: "#38bdf8",
          margin: "28px auto 18px",
          borderRadius: "10px",
        }}
      />

      <p
        style={{
          color: "#94a3b8",
          fontSize: "14px",
          marginBottom: "8px",
        }}
      >
        Built with React • TypeScript • Vite
      </p>

      <p
        style={{
          color: "#64748b",
          fontSize: "14px",
          margin: 0,
        }}
      >
        © 2026 Pabodha Devindi. All Rights Reserved.
      </p>

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        style={{
          marginTop: "20px",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "none",
          background: "#38bdf8",
          color: "#020617",
          fontSize: "16px",
          cursor: "pointer",
          transition: ".3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-4px) scale(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0) scale(1)";
        }}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
