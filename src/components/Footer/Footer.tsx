import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-brand">Pabodha Devindi</h2>
      <p className="footer-text">
        Full Stack Developer | Cloud Enthusiast
        <br />
        AI Researcher | Software Engineer
      </p>

      <div className="footer-social">
        <a
          href="https://github.com/devindipb"
          target="_blank"
          rel="noreferrer"
          className="footer-icon-link"
          aria-label="GitHub profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pabodha-devindi-157408314"
          target="_blank"
          rel="noreferrer"
          className="footer-icon-link"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:pabodhadevindi2002@gmail.com"
          className="footer-icon-link"
          aria-label="Email Pabodha Devindi"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="footer-divider" />

      <p className="footer-copy">Built with React | TypeScript | Vite</p>
      <p className="footer-built">
        Copyright 2026 Pabodha Devindi. All Rights Reserved.
      </p>

      <button
        className="scroll-top"
        type="button"
        aria-label="Scroll to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
