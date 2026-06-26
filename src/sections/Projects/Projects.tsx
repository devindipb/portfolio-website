import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaClock,
  FaCalendarAlt,
  FaCheckCircle,
  FaAws,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiPython,
  SiPytorch,
  SiJavascript,
} from "react-icons/si";

import medicineImg from "../../assets/projects/medicine.png";
import patientImg from "../../assets/projects/patient.png";
import campusImg from "../../assets/projects/campus.png";
import aiImg from "../../assets/projects/ai.png";
import awsImg from "../../assets/projects/aws.png";

const Projects = () => {
  const projects = [
    {
      title: "Online Medicine Ordering System",
      category: "FULL STACK APPLICATION",
      featured: true,
      status: "Completed",
      image: medicineImg,
      description:
        "Full stack medicine ordering and delivery platform built using Java and MySQL.",

      tech: [
        { name: "Java", icon: <SiJavascript /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],

      team: "Team of 4",
      duration: "4 Months",
      year: "2024",

      github:
        "https://github.com/devindipb/Medicine-Ordering-System",
    },

    {
      title: "Patient Management System",

      category: "WEB APPLICATION",

      featured: true,

      status: "Completed",

      image: patientImg,

      description:
        "Patient registration, appointment scheduling and profile management system.",

      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],

      team: "Team of 4",

      duration: "4 Months",

      year: "2024",

      github:
        "https://github.com/devindipb/Patient-Management",
    },

    {
      title: "Smart Campus Operations Hub",

      category: "FULL STACK APPLICATION",

      featured: false,

      status: "Completed",

      image: campusImg,

      description:
        "Centralized platform for campus facilities and student services.",

      tech: [
        { name: "React", icon: <SiReact /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],

      team: "Team of 4",

      duration: "3 Months",

      year: "2024",

      github:
        "https://github.com/devindipb/Smart-Campus-Operations-Hub",
    },

    {
      title: "Multimodal AI Framework",

      category: "AI RESEARCH",

      featured: true,

      status: "In Progress",

      image: aiImg,

      description:
        "Research project focused on culturally-aware skin disease diagnosis.",

      tech: [
        { name: "Python", icon: <SiPython /> },
        { name: "PyTorch", icon: <SiPytorch /> },
      ],

      team: "Research Team",

      duration: "1 Year",

      year: "2025",

      github:
        "https://github.com/mayushamihisandali2002-prog/Reserch_Skin-care-deseases",
    },

    {
      title: "AWS Cloud Web Application",

      category: "CLOUD COMPUTING",

      featured: false,

      status: "Completed",

      image: awsImg,

      description:
        "Highly available cloud architecture using AWS services.",

      tech: [
        {
          name: "AWS",
           icon: <FaAws />,
        },
      ],

      team: "Individual",

      duration: "2 Months",

      year: "2025",

      github: "",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 8%",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "48px",
          fontWeight: 700,
          marginBottom: "70px",
        }}
      >
        Featured Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(380px,1fr))",
          gap: "35px",
        }}
      >
        {projects.map((project, index) => (
  <div
    key={index}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow =
        "0 25px 45px rgba(56,189,248,.20)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
    style={{
      background: "rgba(30,41,59,.92)",
      backdropFilter: "blur(16px)",
      borderRadius: "22px",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,.08)",
      transition: ".35s",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    {/* IMAGE */}

    <div
      style={{
        position: "relative",
        height: "240px",
        overflow: "hidden",
      }}
    >
      {project.featured && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            zIndex: 10,
            background: "#f59e0b",
            color: "white",
            padding: "8px 15px",
            borderRadius: "30px",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          ⭐ Featured Project
        </div>
      )}

      <div
        style={{
          position: "absolute",
          right: "16px",
          top: "16px",
          zIndex: 10,
          background:
            project.status === "Completed"
              ? "#16a34a"
              : "#f59e0b",
          color: "white",
          padding: "8px 14px",
          borderRadius: "30px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px",
        }}
      >
        <FaCheckCircle />
        {project.status}
      </div>

      <img
        src={project.image}
        alt={project.title}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: ".5s",
        }}
      />

      <div
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = "0";
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(2,6,23,.60)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          transition: ".35s",
          color: "white",
          fontWeight: 700,
          fontSize: "20px",
        }}
      >
        View Project
        <FaExternalLinkAlt
          style={{
            marginLeft: "10px",
          }}
        />
      </div>
    </div>

    {/* CONTENT */}

    <div
      style={{
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <p
        style={{
          color: "#38bdf8",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        {project.category}
      </p>

      <h3
        style={{
          margin: 0,
          fontSize: "28px",
          marginBottom: "18px",
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "#cbd5e1",
          lineHeight: "1.8",
          flex: 1,
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {project.tech.map((tech) => (
          <span
            key={tech.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#0f172a",
              color: "#38bdf8",
              padding: "8px 14px",
              borderRadius: "30px",
              fontSize: "14px",
            }}
          >
            {tech.icon}
            {tech.name}
          </span>
        ))}
      </div>
            {/* Metrics */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "22px",
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaUsers color="#38bdf8" />
          {project.team}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaClock color="#38bdf8" />
          {project.duration}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <FaCalendarAlt color="#38bdf8" />
          {project.year}
        </div>
      </div>

      {/* GitHub Button */}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0ea5e9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#38bdf8";
            }}
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "12px",
              background: "#38bdf8",
              color: "white",
              fontWeight: "700",
              fontSize: "15px",
              cursor: "pointer",
              transition: ".3s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaGithub />
            View GitHub Repository
          </button>
        </a>
      )}
    </div>
  </div>
))}
      </div>
    </section>
  );
};

export default Projects;