import profile from "../../assets/images/pabodha-profile.jpg";
import cv from "../../assets/cv/Pabodha-Devindi-CV.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "60px",
        padding: "50px",
        background: "#0f172a",
        color: "white",
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: "650px" }}>
        <p
          style={{
            color: "#38bdf8",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Hello, I'm
        </p>

        <h1
          style={{
            fontSize: "65px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Pabodha Devindi
        </h1>

        <h2
          style={{
            color: "#38bdf8",
            marginBottom: "20px",
          }}
        >
          Full Stack Developer | Cloud Enthusiast | IT Researcher
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          Final Year BSc (Hons) Information Technology Undergraduate at
          SLIIT. Passionate about Full Stack Development, Cloud Computing,
          Software Engineering and AI Research. Looking for internship and
          graduate opportunities in the IT industry.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "15px",
          }}
        >
          <a href={cv} download>
  <button
    style={{
      padding: "12px 25px",
      background: "#38bdf8",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Download CV
  </button>
</a>

          <button
            style={{
              padding: "12px 25px",
              background: "transparent",
              color: "white",
              border: "2px solid #38bdf8",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div>
        <img
          src={profile}
          alt="Pabodha Devindi"
          style={{
            width: "350px",
            height: "350px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "5px solid #38bdf8",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;