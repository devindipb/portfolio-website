import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaClock,
  FaCalendarAlt,
  FaCheckCircle,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiPython,
  SiPytorch,
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
        { name: "Java", icon: <FaJava /> },
        { name: "MySQL", icon: <SiMysql /> },
      ],
      team: "Team of 4",
      duration: "4 Months",
      year: "2024",
      github: "https://github.com/devindipb/Medicine-Ordering-System",
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
      github: "https://github.com/devindipb/Patient-Management",
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
      github: "https://github.com/devindipb/Smart-Campus-Operations-Hub",
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
      tech: [{ name: "AWS", icon: <FaAws /> }],
      team: "Individual",
      duration: "2 Months",
      year: "2025",
      github: "",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-media">
              {project.featured && (
                <span className="project-badge">Featured Project</span>
              )}
              <span
                className={`project-status ${
                  project.status === "Completed"
                    ? "status-complete"
                    : "status-progress"
                }`}
              >
                <FaCheckCircle />
                {project.status}
              </span>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-overlay"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span>
                    View Project <FaExternalLinkAlt />
                  </span>
                </a>
              )}
            </div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech.name} className="project-tech-pill">
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="project-meta">
                <span>
                  <FaUsers /> {project.team}
                </span>
                <span>
                  <FaClock /> {project.duration}
                </span>
                <span>
                  <FaCalendarAlt /> {project.year}
                </span>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  <FaGithub />
                  View GitHub Repository
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
