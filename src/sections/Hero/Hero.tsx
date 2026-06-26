import { TypeAnimation } from "react-type-animation";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

import profile from "../../assets/images/pabodha-profile.jpg";
import cv from "../../assets/cv/Pabodha-Devindi-CV.pdf";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import networkBg from "../../assets/images/network-bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(2,6,23,.95), rgba(15,23,42,.92)), url(${networkBg})`,
      }}
    >
      <AnimatedBackground />

      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1 className="hero-title">
          Pabodha
          <br />
          <span>Devindi</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            1500,
            "Cloud Enthusiast",
            1500,
            "Software Engineer",
            1500,
            "IT Researcher",
            1500,
          ]}
          speed={45}
          repeat={Infinity}
          wrapper="h2"
          className="hero-subtitle"
        />

        <p className="hero-copy">
          Final Year BSc (Hons) Information Technology Undergraduate at SLIIT.
          <br />
          Passionate about building scalable web applications, cloud solutions,
          and AI-powered software.
          <br />
          Currently seeking Graduate Software Engineer and Full Stack Developer
          opportunities.
        </p>

        <div className="hero-badges">
          <span className="hero-badge">
            <FaMapMarkerAlt color="#38bdf8" />
            Matugama, Sri Lanka
          </span>
          <span className="hero-badge">
            <FaGraduationCap color="#38bdf8" />
            Final Year IT Undergraduate
          </span>
          <span className="hero-badge">
            <FaBriefcase color="#38bdf8" />
            Open to Graduate Opportunities
          </span>
        </div>

        <div className="hero-cta">
          <a href={cv} download className="btn btn-primary">
            <FaDownload />
            Download CV
          </a>
          <a href="#projects" className="btn btn-secondary">
            <FaRocket />
            View Projects
          </a>
        </div>

        <div className="hero-proof" aria-label="Portfolio highlights">
          <span>
            <strong>5+</strong>
            Projects
          </span>
          <span>
            <strong>7+</strong>
            Certificates
          </span>
          <span>
            <strong>6 mo</strong>
            Internship
          </span>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-profile-card">
          <span className="hero-availability">
            <FaCheckCircle />
            Available for graduate roles
          </span>
          <img
            src={profile}
            alt="Pabodha Devindi"
            className="hero-image"
          />
          <div className="hero-profile-caption">
            <strong>Pabodha Devindi</strong>
            <span>Full Stack Developer | AI Researcher</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
