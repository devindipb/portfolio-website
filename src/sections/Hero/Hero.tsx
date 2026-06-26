import { TypeAnimation } from "react-type-animation";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
  FaRocket,
} from "react-icons/fa";

import profile from "../../assets/images/pabodha-profile.jpg";
import cv from "../../assets/cv/Pabodha-Devindi-CV.pdf";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import networkBg from "../../assets/images/network-bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "80px",
        padding: "80px 8%",
        background: `
linear-gradient(
135deg,
#020617,
#081425,
#0f172a
)
`,
backgroundImage: `
linear-gradient(
135deg,
rgba(2,6,23,.95),
rgba(15,23,42,.92)
),
url(${networkBg})
`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
position: "relative",
overflow: "hidden",
        color: "white",
        flexWrap: "wrap",
      }}
    >
      <AnimatedBackground />
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          maxWidth: "650px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: "#38bdf8",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Hello, I'm
        </p>

        <h1
style={{
fontSize:"76px",
fontWeight:800,
lineHeight:"1",
marginBottom:"10px",
}}
>
Pabodha

<br />

<span
style={{
color:"#38bdf8"
}}
>
Devindi
</span>
</h1>

        <TypeAnimation
sequence={[
"Full Stack Developer",1500,
"Cloud Enthusiast",1500,
"Software Engineer",1500,
"IT Researcher",1500,
]}
speed={45}
repeat={Infinity}
wrapper="h2"
style={{
fontSize:"30px",
fontWeight:"700",
marginBottom:"25px",
}}
/>

        <p
  style={{
    fontSize: "20px",
    lineHeight: "1.9",
    color: "#cbd5e1",
    maxWidth:"600px",
  }}
>
  Final Year BSc (Hons) Information Technology Undergraduate at SLIIT.
  <br />
  Passionate about building scalable web applications, cloud solutions,
  and AI-powered software.
  <br />
  Currently seeking Graduate Software Engineer and Full Stack Developer
  opportunities.
</p>

        {/* BADGES */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <span
  style={{
    padding: "10px 18px",
    background: "#1e293b",
    borderRadius: "30px",
    border: "1px solid #38bdf8",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <FaMapMarkerAlt color="#38bdf8" />
  Matugama, Sri Lanka
</span>

          <span
  style={{
    padding: "10px 18px",
    background: "#1e293b",
    borderRadius: "30px",
    border: "1px solid #38bdf8",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <FaGraduationCap color="#38bdf8" />
  Final Year IT Undergraduate
</span>

         <span
  style={{
    padding: "10px 18px",
    background: "#1e293b",
    borderRadius: "30px",
    border: "1px solid #38bdf8",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
  <FaBriefcase color="#38bdf8" />
  Open to Graduate Opportunities
</span>
        </div>

        {/* BUTTONS */}
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a href={cv} download>
            <button
              style={{
                padding: "14px 28px",
                background: "#38bdf8",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                color: "#fff",
                fontSize: "17px",
                height:"58px",
                minWidth:"190px",

              }}
            >
              <FaDownload style={{ marginRight: "8px" }} />
              Download CV
            </button>
          </a>

         <a href="#projects">
  <button
    style={{
      padding: "14px 28px",
      background: "transparent",
      color: "white",
      border: "2px solid #38bdf8",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "17px",
      transition: "0.3s",
      height:"58px",
      minWidth:"190px",

    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#38bdf8";
      e.currentTarget.style.color = "#fff";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#fff";
    }}
  >
     <FaRocket style={{ marginRight: "8px" }} />
  View Projects
  </button>
</a>
        </div>
      </div>

      {/* RIGHT SIDE */}
<div
  style={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  }}
>

        <img
  src={profile}
  alt="Pabodha Devindi"

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.04)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}

  style={{
    width: "420px",
    height: "420px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "8px solid #38bdf8",

    boxShadow: `
      0 0 30px #38bdf8,
      0 0 60px rgba(56,189,248,.55),
      0 0 100px rgba(56,189,248,.35)
    `,

    transition: ".5s",

    animation: "float 4s ease-in-out infinite",
    
  }}
/>
      </div>
    </section>
  );
};

export default Hero;