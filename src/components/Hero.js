import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        padding: "60px 20px 60px",
        textAlign: "center",
      }}
    >
      {/* FOTO */}
      <img
        src={profile}
        alt="Profile"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #3b82f6",
          marginBottom: "15px",
        }}
      />

      {/* STATUS */}
      <div style={{ marginBottom: "10px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#1e293b",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            marginBottom: "6px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              background: "#22c55e",
              borderRadius: "50%",
            }}
          ></span>
          Available for work
        </div>

        <div style={{ fontSize: "14px", opacity: 0.7 }}>
          📍 Bandung, Indonesia
        </div>
      </div>

      {/* NAMA */}
      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginTop: "10px" }}>
        Aditya Gunaldhi
      </h1>

      {/* ROLE */}
      <p
        style={{
          marginTop: "15px",
          fontSize: "18px",
          background: "linear-gradient(90deg, orange, yellow)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Data Scientist & Backend Developer | Python, Javascript, Deep Learning Enthusiast
      </p>

      {/* ABOUT (yang tadi kamu minta gabung) */}
      <p
        style={{
          marginTop: "20px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6",
          opacity: 0.8,
        }}
      >
        Informatics graduate with a passion for building intelligent systems and modern web applications.
        Experienced in developing machine learning solutions and scalable backend systems.
      </p>

      {/* SOCIAL ICON */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {[ 
          { icon: <FaGithub />, link: "https://github.com/adityagunaldhi" },
          { icon: <FaInstagram />, link: "https://instagram.com/radityagunaldhi" },
          { icon: <FaLinkedin />, link: "https://linkedin.com/in/username" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              fontSize: "22px",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Hero;