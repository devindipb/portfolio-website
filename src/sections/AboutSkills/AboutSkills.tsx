import { useEffect, useRef, useState } from "react";
import { FaUser, FaJava, FaReact, FaNodeJs, FaGithub, FaAws, FaCheckCircle, FaEnvelope } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql, SiCypress } from "react-icons/si";

const AboutSkills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Java", level: 90, icon: <FaJava />, color: "#f89820" },
    { name: "Spring Boot", level: 85, icon: <SiSpringboot />, color: "#6DB33F" },
    { name: "React", level: 85, icon: <FaReact />, color: "#61dafb" },
    { name: "Node.js", level: 80, icon: <FaNodeJs />, color: "#68A063" },
    { name: "MongoDB", level: 80, icon: <SiMongodb />, color: "#47A248" },
    { name: "MySQL", level: 80, icon: <SiMysql />, color: "#00758F" },
    { name: "AWS", level: 75, icon: <FaAws />, color: "#FF9900" },
    { name: "Git & GitHub", level: 90, icon: <FaGithub />, color: "#ffffff" },
    { name: "Cypress", level: 70, icon: <SiCypress />, color: "#69D3A7" },
  ];

  return (
    <section id="about-skills" className="about-section" ref={sectionRef}>
      <div className="section-container about-grid">
        <article className="glass-card">
          <div className="section-heading-row">
            <div className="section-heading-icon">
              <FaUser />
            </div>
            <div>
              <h2 className="section-heading-title">About Me</h2>
              <p className="section-heading-subtitle">Get to know me</p>
            </div>
          </div>

          <p className="about-copy">
            I'm <strong>Pabodha Devindi</strong>, a Final Year BSc (Hons)
            Information Technology Undergraduate at SLIIT with a strong passion
            for Full Stack Development, Cloud Computing, Software Engineering,
            and Artificial Intelligence.
          </p>

          <p className="about-copy">
            I enjoy developing scalable web applications, solving real-world
            problems, and continuously improving my technical knowledge through
            software engineering projects and AI research.
          </p>

          <p className="about-copy">
            My long-term goal is to become a Software Engineer capable of
            delivering modern, scalable, and user-friendly software solutions
            while contributing to innovative AI-driven technologies.
          </p>

          <div className="about-list">
            <div className="about-highlight">
              <FaCheckCircle /> Final Year IT Undergraduate
            </div>
            <div className="about-highlight">
              <FaCheckCircle /> Full Stack Developer
            </div>
            <div className="about-highlight">
              <FaCheckCircle /> Cloud Computing Enthusiast
            </div>
            <div className="about-highlight">
              <FaCheckCircle /> AI Researcher
            </div>
          </div>

          <a href="#contact" className="about-button">
            <FaEnvelope /> Let's Connect
          </a>
        </article>

        <article className="glass-card">
          <div className="section-heading-row">
            <div>
              <h2 className="section-heading-title">Technical Skills</h2>
              <p className="section-heading-subtitle">
                Technologies and tools I work with
              </p>
            </div>
          </div>

          {skills.map((skill) => (
            <div key={skill.name} className="skill-row">
              <div className="skill-top">
                <div className="skill-name">
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                  {skill.name}
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: animate ? `${skill.level}%` : "0%",
                    background: skill.color,
                  }}
                />
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default AboutSkills;
