import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socials = [
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/pabodha-devindi-157408314",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/devindipb",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    link: "mailto:pabodhadevindi2002@gmail.com",
  },
];

const SocialSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebar(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`social-sidebar ${showSidebar ? "visible" : ""}`}>
      {socials.map((item) => (
        <a
          key={item.label}
          className="sidebar-button"
          href={item.link}
          target={item.link.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={item.label}
        >
          {item.icon}
          <span className="sidebar-tooltip">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
