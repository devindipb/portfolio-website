const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#020617",
        color: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <h2>Pabodha Devindi</h2>

      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Certificates</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;