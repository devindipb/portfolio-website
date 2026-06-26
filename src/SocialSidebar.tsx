import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "22px",
        top: "50%",
        transform: showSidebar
          ? "translateY(-50%) translateX(0)"
          : "translateY(-50%) translateX(80px)",
        opacity: showSidebar ? 1 : 0,
        transition: "all .45s ease",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        zIndex: 9999,
      }}
    >
      {socials.map((item) => (
        <SidebarItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          link={item.link}
        />
      ))}
    </div>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  link: string;
};

const SidebarItem = ({
  icon,
  label,
  link,
}: SidebarItemProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <a
        href={link}
        target={
          link.startsWith("http")
            ? "_blank"
            : undefined
        }
        rel="noreferrer"
        style={{
          textDecoration: "none",
        }}
      >
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "16px",
            border: "1px solid rgba(56,189,248,.25)",
            background: hover
              ? "#38bdf8"
              : "rgba(30,41,59,.82)",
            backdropFilter: "blur(15px)",
            color: hover ? "#020617" : "#38bdf8",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            transition: "all .3s ease",
            transform: hover
              ? "translateX(-8px) scale(1.08)"
              : "translateX(0) scale(1)",
            boxShadow: hover
              ? "0 12px 30px rgba(56,189,248,.45)"
              : "0 10px 25px rgba(0,0,0,.25)",
          }}
        >
          {icon}
        </button>
      </a>
            <div
        style={{
          position: "absolute",
          right: "65px",
          top: "50%",
          transform: hover
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(10px)",
          opacity: hover ? 1 : 0,
          transition: ".3s ease",
          background: "#1e293b",
          color: "#ffffff",
          padding: "8px 14px",
          borderRadius: "10px",
          border: "1px solid rgba(56,189,248,.25)",
          whiteSpace: "nowrap",
          fontSize: "14px",
          fontWeight: 500,
          pointerEvents: "none",
          boxShadow:
            "0 10px 25px rgba(0,0,0,.25)",
        }}
      >
        {label}
      </div>

      <div
        style={{
          position: "absolute",
          top: "-3px",
          right: "-3px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#38bdf8",
          opacity: hover ? 1 : 0,
          transform: hover
            ? "scale(1)"
            : "scale(.5)",
          transition: ".3s ease",
          boxShadow:
            "0 0 12px rgba(56,189,248,.9)",
        }}
      />
    </div>
  );
};

export default SocialSidebar;