import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profileImg from "../../assets/images/pabodha-profile.jpg";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const element = section as HTMLElement;

        if (
          window.scrollY >= element.offsetTop - 120 &&
          window.scrollY < element.offsetTop + element.offsetHeight - 120
        ) {
          current = element.id;
        }
      });

      setActive(current);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about-skills" },
    { title: "Projects", id: "projects" },
    { title: "Research", id: "research-publications" },
    { title: "Certificates", id: "certificates" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-progress" style={{ width: `${progress}%` }} />

      <div className="nav-logo">
        <img src={profileImg} alt="Pabodha Devindi" className="nav-logo-image" />
        <h2 className="nav-logo-text">Pabodha Devindi</h2>
      </div>

      <button
        type="button"
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <a
              href={`#${item.id}`}
              className={`nav-link ${active === item.id ? "active" : ""}`}
              aria-current={active === item.id ? "page" : undefined}
              onClick={closeMenu}
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
