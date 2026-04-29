function Navbar() {
  const menu = [
    { name: "Home", link: "#hero" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#0f172a",
        color: "white",
        padding: "15px 20px",
        zIndex: 1000,
        fontSize: "14px",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>My Portfolio</h3>

        <div style={{ display: "flex", gap: "20px" }}>
          {menu.map((item, i) => (
            <a
              key={i}
              href={item.link}
              style={{ color: "white", opacity: 0.8 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;