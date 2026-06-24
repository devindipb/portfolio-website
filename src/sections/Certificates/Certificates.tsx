import awsBuilder from "../../assets/certificates/aws-cloud-builder.jpg";
import awsBadge from "../../assets/certificates/aws-cloud-builder-badge.png";
import frontend from "../../assets/certificates/frontend-web-dev.jpg";
import powerapps from "../../assets/certificates/microsoft-powerapps.jpg";
import research from "../../assets/certificates/research-methodology.jpg";
import serverside from "../../assets/certificates/server-side-web.jpg";
import webdesign from "../../assets/certificates/web-design.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Cloud Web Application Builder",
      issuer: "AWS Academy",
      image: awsBuilder,
    },
    {
      title: "AWS Academy Graduate Badge",
      issuer: "AWS Academy",
      image: awsBadge,
    },
    {
      title: "Front-End Web Development",
      issuer: "University of Moratuwa",
      image: frontend,
    },
    {
      title: "Server-Side Web Programming",
      issuer: "University of Moratuwa",
      image: serverside,
    },
    {
      title: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      image: webdesign,
    },
    {
      title: "Research Methodology",
      issuer: "SLIIT",
      image: research,
    },
    {
      title: "Create a Canvas App in Power Apps",
      issuer: "Microsoft Learn",
      image: powerapps,
    },
  ];

  return (
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
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Certificates
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "25px",
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              border: "1px solid #38bdf8",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>{cert.title}</h3>

              <p
                style={{
                  color: "#cbd5e1",
                  marginTop: "10px",
                }}
              >
                {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;