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
    <section
      style={{
        padding: "35px 8% 60px",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          background: "rgba(30,41,59,.88)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow: "0 10px 35px rgba(0,0,0,.25)",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(56,189,248,.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
            style={{
              padding: "30px 22px",
              textAlign: "center",
              transition: ".35s",
              cursor: "pointer",
              borderRight:
                index !== stats.length - 1
                  ? "1px solid rgba(255,255,255,.08)"
                  : "none",
            }}
          >
            <div
              style={{
                width: "62px",
                height: "62px",
                margin: "0 auto 18px",
                borderRadius: "18px",
                background: `${item.color}20`,
                color: item.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              {item.icon}
            </div>

            <h2
              style={{
                color: "white",
                fontSize: "42px",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              {item.number}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "16px",
                marginBottom: "18px",
              }}
            >
              {item.label}
            </p>

            <div
              style={{
                width: "58px",
                height: "4px",
                borderRadius: "20px",
                background: item.color,
                margin: "0 auto",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;