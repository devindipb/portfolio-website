import {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FaUser,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiCypress,
} from "react-icons/si";

const AboutSkills = () => {
    const [animate, setAnimate] = useState(false);

const sectionRef =
  useRef<HTMLElement>(null);

useEffect(() => {
  const observer =
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);
  const skills = [
    {
      name: "Java",
      level: 90,
      icon: <FaJava />,
      color: "#f89820",
    },

    {
      name: "Spring Boot",
      level: 85,
      icon: <SiSpringboot />,
      color: "#6DB33F",
    },

    {
      name: "React",
      level: 85,
      icon: <FaReact />,
      color: "#61dafb",
    },

    {
      name: "Node.js",
      level: 80,
      icon: <FaNodeJs />,
      color: "#68A063",
    },

    {
      name: "MongoDB",
      level: 80,
      icon: <SiMongodb />,
      color: "#47A248",
    },

    {
      name: "MySQL",
      level: 80,
      icon: <SiMysql />,
      color: "#00758F",
    },

    {
      name: "AWS",
      level: 75,
      icon: <FaAws />,
      color: "#FF9900",
    },

    {
      name: "Git & GitHub",
      level: 90,
      icon: <FaGithub />,
      color: "#ffffff",
    },

    {
      name: "Cypress",
      level: 70,
      icon: <SiCypress />,
      color: "#69D3A7",
    },
  ];

  return (
    <section
      id="about-skills"
      ref={sectionRef}
      style={{
        padding: "90px 8%",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",

          display: "grid",

          gridTemplateColumns:
            window.innerWidth < 1100
              ? "1fr"
              : "1fr 1.2fr",

          gap: "30px",
        }}
      >

              {/* ================= LEFT CARD ================= */}

        <div
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 18px 40px rgba(56,189,248,.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          style={{
            background: "rgba(30,41,59,.88)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "22px",
            padding: "40px",
            transition: ".35s",
          }}
        >
          {/* Heading */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "16px",
                background: "rgba(56,189,248,.15)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaUser
                style={{
                  color: "#38bdf8",
                  fontSize: "24px",
                }}
              />
            </div>

            <div>
              <h2
                style={{
                  color: "white",
                  margin: 0,
                  fontSize: "32px",
                }}
              >
                About Me
              </h2>

              <p
                style={{
                  margin: "5px 0 0",
                  color: "#94a3b8",
                  fontSize: "15px",
                }}
              >
                Get to know me
              </p>
            </div>
          </div>

          {/* Description */}

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "2",
              fontSize: "17px",
              marginBottom: "18px",
            }}
          >
            I'm <strong>Pabodha Devindi</strong>, a Final Year
            BSc (Hons) Information Technology Undergraduate
            at SLIIT with a strong passion for Full Stack
            Development, Cloud Computing, Software Engineering
            and Artificial Intelligence.
          </p>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "2",
              fontSize: "17px",
              marginBottom: "18px",
            }}
          >
            I enjoy developing scalable web applications,
            solving real-world problems and continuously
            improving my technical knowledge through software
            engineering projects and AI research.
          </p>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "2",
              fontSize: "17px",
            }}
          >
            My long-term goal is to become a Software Engineer
            capable of delivering modern, scalable and
            user-friendly software solutions while contributing
            to innovative AI-driven technologies.
          </p>

          {/* Highlights */}

          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gap: "12px",
            }}
          >
            <div
              style={{
                color: "#38bdf8",
                fontWeight: "600",
              }}
            >
              ✔ Final Year IT Undergraduate
            </div>

            <div
              style={{
                color: "#38bdf8",
                fontWeight: "600",
              }}
            >
              ✔ Full Stack Developer
            </div>

            <div
              style={{
                color: "#38bdf8",
                fontWeight: "600",
              }}
            >
              ✔ Cloud Computing Enthusiast
            </div>

            <div
              style={{
                color: "#38bdf8",
                fontWeight: "600",
              }}
            >
              ✔ AI Researcher
            </div>
          </div>

          {/* Button */}

         <a href="#contact">
  <button
    style={{
      width: "100%",
      padding: "16px",
      marginTop: "35px",
      background: "transparent",
      border: "2px solid #38bdf8",
      borderRadius: "14px",
      color: "#38bdf8",
      fontWeight: 700,
      fontSize: "18px",
      cursor: "pointer",
      transition: ".3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#38bdf8";
      e.currentTarget.style.color = "#020617";
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow =
        "0 12px 30px rgba(56,189,248,.35)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#38bdf8";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    📧 Let's Connect
  </button>
</a>
        </div>

        {/* RIGHT CARD STARTS IN PART 3 */}

                {/* ================= RIGHT CARD ================= */}

        <div
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 18px 40px rgba(56,189,248,.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          style={{
            background: "rgba(30,41,59,.88)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: "22px",
            padding: "40px",
            transition: ".35s",
          }}
        >
          {/* Heading */}

          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                color: "white",
                fontSize: "32px",
                margin: 0,
              }}
            >
              Technical Skills
            </h2>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "8px",
              }}
            >
              Technologies and tools I work with
            </p>
          </div>

          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                marginBottom: "22px",
              }}
            >
              {/* Top Row */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      color: skill.color,
                      fontSize: "24px",
                    }}
                  >
                    {skill.icon}
                  </span>

                  <span
                    style={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    {skill.name}
                  </span>
                </div>

                <span
                  style={{
                    color: "#38bdf8",
                    fontWeight: "700",
                  }}
                >
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}

              <div
                style={{
                  width: "100%",
                  height: "10px",
                  background: "#334155",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: animate
  ? `${skill.level}%`
  : "0%",
                    height: "100%",
                    borderRadius: "20px",
                    background:
                      "linear-gradient(90deg,#38bdf8,#0ea5e9)",
                    transition:
  "width 1.6s cubic-bezier(.22,1,.36,1)",
                    boxShadow:
      "0 0 12px rgba(56,189,248,.35)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
};

export default AboutSkills;