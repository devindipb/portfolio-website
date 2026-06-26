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
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let's build something amazing together.</p>

      <div className="contact-grid">
        {contacts.map((item, index) => (
          <article key={index} className="contact-card">
            <div className="contact-icon">{item.icon}</div>
            <h3 className="contact-title">{item.title}</h3>
            {item.link ? (
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="contact-link"
              >
                {item.value}
              </a>
            ) : (
              <p className="contact-text">{item.value}</p>
            )}
          </article>
        ))}
      </div>

      <p className="contact-note">
        Available for internships, graduate opportunities, freelance work, and
        exciting software development projects. Feel free to connect anytime.
      </p>
    </section>
  );
};

export default Contact;
