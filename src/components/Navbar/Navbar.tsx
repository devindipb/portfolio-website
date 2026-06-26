import { useEffect, useState } from "react";
import profileImg from "../../assets/images/pabodha-profile.jpg";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const element = section as HTMLElement;

        if (
          window.scrollY >= element.offsetTop - 120 &&
          window.scrollY <
            element.offsetTop + element.offsetHeight - 120
        ) {
          current = element.id;
        }
      });

      setActive(current);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scrollPercent =
        docHeight > 0
          ? (scrollTop / docHeight) * 100
          : 0;

      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Home",
      id: "home",
    },
    { title: "About", id: "about-skills" },
  { title: "Skills", id: "about-skills" },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Certificates",
      id: "certificates",
    },
    {
      title: "Contact",
      id: "contact",
    },
  ];

  const linkStyle = (id: string) => ({
    color:
      active === id
        ? "#38bdf8"
        : "#ffffff",

    textDecoration: "none",

    fontWeight:
      active === id
        ? 700
        : 500,

    fontSize: "16px",

    transition: "all .3s ease",

    padding: "10px 16px",

    borderRadius: "30px",

    background:
      active === id
        ? "rgba(56,189,248,.15)"
        : "transparent",

    position: "relative" as const,
  });
    return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isScrolled
          ? "12px 60px"
          : "18px 60px",
        background:
          "linear-gradient(90deg,#020617,#081327,#020617)",
        backdropFilter: "blur(16px)",
        borderBottom:
          "1px solid rgba(56,189,248,.15)",
        transition: "all .35s ease",
      }}
    >
      {/* Scroll Progress Bar */}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${progress}%`,
          height: "3px",
          background: "#38bdf8",
          boxShadow:
            "0 0 12px rgba(56,189,248,.8)",
          transition: "width .15s linear",
        }}
      />

      {/* Logo */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
  src={profileImg}
  alt="Pabodha Devindi"
  style={{
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #38bdf8",
  }}
/>

        <h2
          style={{
            margin: 0,
            color: "#38bdf8",
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: ".5px",
          }}
        >
          Pabodha Devindi
        </h2>
      </div>

      {/* Menu */}

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        {menuItems.map((item) => (
          <li key={item.title}>
            <a
              href={`#${item.id}`}
              style={linkStyle(item.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  "#38bdf8";

                e.currentTarget.style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                if (active !== item.id) {
                  e.currentTarget.style.color =
                    "#ffffff";
                }

                e.currentTarget.style.transform =
                  "translateY(0)";
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;