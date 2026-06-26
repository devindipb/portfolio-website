import { useState } from "react";
import { FaCheckCircle, FaSearchPlus, FaEye } from "react-icons/fa";

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
      <section id="certificates" className="certificates-section">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <article key={index} className="certificate-card">
              <div className="certificate-image-wrapper">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="certificate-image"
                />
                <span className="certificate-badge">{cert.category}</span>
                <span className="certificate-status">
                  <FaCheckCircle /> Verified
                </span>
                <div
                  className="certificate-overlay"
                  role="button"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <div>
                    <FaSearchPlus /> View Certificate
                  </div>
                </div>
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">Issued by {cert.issuer}</p>
                <p className="certificate-issued">Issued: {cert.issued}</p>

                <div className="certificate-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="certificate-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  className="certificate-button"
                  type="button"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <FaEye /> View Certificate
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate Preview"
            className="modal-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Certificates;
