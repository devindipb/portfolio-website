import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "pabodhadevindi2002@gmail.com",
    link: "mailto:pabodhadevindi2002@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+94 74 050 4801",
    link: "tel:+94740504801",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Matugama, Sri Lanka",
    link: "",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "View LinkedIn Profile",
    link: "https://www.linkedin.com/in/pabodha-devindi-157408314",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "View GitHub Profile",
    link: "https://github.com/devindipb",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 10%",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "46px",
          fontWeight: "700",
          marginBottom: "15px",
        }}
      >
        Contact Me
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "18px",
          marginBottom: "55px",
        }}
      >
        Let's build something amazing together.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {contacts.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-10px) scale(1.02)";

              e.currentTarget.style.boxShadow =
                "0 20px 45px rgba(56,189,248,.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0) scale(1)";

              e.currentTarget.style.boxShadow =
                "none";
            }}
            style={{
              background: "rgba(30,41,59,.92)",
              border:
                "1px solid rgba(56,189,248,.22)",
              borderRadius: "18px",
              padding: "22px",
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              backdropFilter: "blur(15px)",
              transition: ".35s",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                borderRadius: "16px",
                background:
                  "rgba(56,189,248,.15)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto 16px",
                color: "#38bdf8",
                fontSize: "24px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "21px",
                fontWeight: 700,
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h3>
                        {item.link ? (
              <a
                href={item.link}
                target={
                  item.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                  transition: ".3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#7dd3fc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#38bdf8";
                }}
              >
                {item.value}
              </a>
            ) : (
              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginTop: "60px",
          fontSize: "17px",
          lineHeight: "1.8",
          maxWidth: "700px",
          marginInline: "auto",
        }}
      >
        Available for internships, graduate opportunities,
        freelance work, and exciting software development
        projects. Feel free to connect anytime.
      </p>
    </section>
  );
};

export default Contact;