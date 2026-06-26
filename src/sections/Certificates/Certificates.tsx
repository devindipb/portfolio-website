import { useState } from "react";
import {
  FaCheckCircle,
  FaSearchPlus,
  FaEye,
} from "react-icons/fa";

import awsBuilder from "../../assets/certificates/aws-cloud-builder.jpg";
import awsBadge from "../../assets/certificates/aws-cloud-builder-badge.png";
import frontend from "../../assets/certificates/frontend-web-dev.jpg";
import powerapps from "../../assets/certificates/microsoft-powerapps.jpg";
import research from "../../assets/certificates/research-methodology.jpg";
import serverside from "../../assets/certificates/server-side-web.jpg";
import webdesign from "../../assets/certificates/web-design.jpg";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: "AWS Cloud Web Application Builder",
      issuer: "AWS Academy",
      issued: "Sep 2025",
      category: "Cloud",
      skills: ["AWS", "EC2", "RDS", "Cloud"],
      image: awsBuilder,
    },
    {
      title: "AWS Academy Graduate Badge",
      issuer: "AWS Academy",
      issued: "Sep 2025",
      category: "Cloud",
      skills: ["AWS", "Cloud", "Academy"],
      image: awsBadge,
    },
    {
      title: "Front-End Web Development",
      issuer: "University of Moratuwa",
      issued: "2024",
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
      image: frontend,
    },
    {
      title: "Server-Side Web Programming",
      issuer: "University of Moratuwa",
      issued: "2024",
      category: "Backend",
      skills: ["PHP", "MySQL", "Backend"],
      image: serverside,
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      issued: "2024",
      category: "Web Design",
      skills: ["UI", "UX", "Design"],
      image: webdesign,
    },
    {
      title: "Research Methodology",
      issuer: "SLIIT",
      issued: "2025",
      category: "Research",
      skills: ["Research", "Writing", "Analysis"],
      image: research,
    },
    {
      title: "Create a Canvas App in Power Apps",
      issuer: "Microsoft Learn",
      issued: "2025",
      category: "Microsoft",
      skills: ["Power Apps", "Low Code", "Microsoft"],
      image: powerapps,
    },
  ];
    return (
    <>
      <section
        id="certificates"
        style={{
          padding: "100px 10%",
          background: "#020617",
          color: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#38bdf8",
            fontSize: "46px",
            marginBottom: "60px",
            fontWeight: 700,
          }}
        >
          Certificates
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(340px,1fr))",
            gap: "30px",
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 45px rgba(56,189,248,.30)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "none";
              }}
              style={{
                background: "rgba(30,41,59,.92)",
                border: "1px solid rgba(56,189,248,.25)",
                borderRadius: "18px",
                overflow: "hidden",
                transition: ".35s",
                backdropFilter: "blur(18px)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    height: "230px",
                    objectFit: "cover",
                    transition: ".45s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "scale(1)";
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "#f59e0b",
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "30px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {cert.category}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "#16a34a",
                    color: "white",
                    padding: "7px 14px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  <FaCheckCircle />
                  Verified
                </div>

                <div
                  onClick={() =>
                    setSelectedImage(cert.image)
                  }
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "rgba(2,6,23,.55)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    cursor: "pointer",
                    transition: ".35s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity =
                      "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity =
                      "0";
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <FaSearchPlus />
                    View Certificate
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    marginBottom: "10px",
                    fontSize: "23px",
                    lineHeight: 1.4,
                  }}
                >
                  {cert.title}
                </h3>

                <p
                  style={{
                    color: "#38bdf8",
                    marginBottom: "6px",
                    fontWeight: 600,
                  }}
                >
                  Issued by {cert.issuer}
                </p>

                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "18px",
                  }}
                >
                  Issued : {cert.issued}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "22px",
                  }}
                >
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background:
                          "rgba(56,189,248,.12)",
                        color: "#38bdf8",
                        padding: "7px 14px",
                        borderRadius: "30px",
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setSelectedImage(cert.image)
                  }
                  style={{
                    marginTop: "auto",
                    padding: "13px",
                    background: "#38bdf8",
                    border: "none",
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FaEye />
                  View Certificate
                </button>
              </div>
                          </div>
          ))}

        </div>
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "30px",
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Certificate Preview"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "95%",
              maxHeight: "90%",
              borderRadius: "14px",
              border: "3px solid #38bdf8",
              boxShadow: "0 0 40px rgba(56,189,248,.45)",
            }}
          />
        </div>
      )}
    </>
  );
};

export default Certificates;