import { useEffect, useState } from "react";
import {
  FaFolderOpen,
  FaCertificate,
  FaFlask,
  FaBriefcase,
} from "react-icons/fa";

const Stats = () => {
  const [count, setCount] = useState({
    projects: 0,
    certificates: 0,
    research: 0,
    internship: 0,
  });

  useEffect(() => {
    let projects = 0;
    let certificates = 0;
    let research = 0;
    let internship = 0;

    const interval = setInterval(() => {
      if (projects < 5) projects++;
      if (certificates < 7) certificates++;
      if (research < 1) research++;
      if (internship < 6) internship++;

      setCount({
        projects,
        certificates,
        research,
        internship,
      });

      if (
        projects === 5 &&
        certificates === 7 &&
        research === 1 &&
        internship === 6
      ) {
        clearInterval(interval);
      }
    }, 180);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <FaFolderOpen />,
      number: `${count.projects}+`,
      label: "Projects Completed",
      color: "#3b82f6",
    },
    {
      icon: <FaCertificate />,
      number: `${count.certificates}+`,
      label: "Certificates Earned",
      color: "#22c55e",
    },
    {
      icon: <FaFlask />,
      number: `${count.research}`,
      label: "Research Project",
      color: "#a855f7",
    },
    {
      icon: <FaBriefcase />,
      number: `${count.internship}+`,
      label: "Months Internship",
      color: "#f59e0b",
    },
  ];

  return (
    <section id="stats" className="stats-section">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div key={index} className="stats-card">
            <div className="stats-icon" style={{ background: `${item.color}20`, color: item.color }}>
              {item.icon}
            </div>

            <h2 className="stats-number">{item.number}</h2>
            <p className="stats-label">{item.label}</p>
            <div className="stats-divider" style={{ background: item.color }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;