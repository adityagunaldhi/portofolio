function Contact() {
  return (
    <section
      id="contact"
      style={{
        scrollMarginTop: "90px",
        padding: "100px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        <h2 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center" }}>
          Contact
        </h2>

        <div
          style={{
            padding: "20px",
            background: "#1e293b",
            borderRadius: "10px",
            border: "1px solid #334155",
            textAlign: "center",
          }}
        >
          {/* STATUS */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#022c22",
              color: "#22c55e",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "12px",
              marginBottom: "15px",
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
            Available for Freelance
          </div>

          <h3 style={{ marginBottom: "10px" }}>
            Let’s Work Together
          </h3>

          <p style={{ opacity: 0.7, marginBottom: "20px" }}>
            Ready to bring your ideas to life? Let’s collaborate!
          </p>

          {/* BUTTON */}
          <a
            href="mailto:radityagunaldhi@gmail.com"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#3b82f6",
              borderRadius: "6px",
              color: "white",
              textDecoration: "none",
              marginBottom: "10px",
            }}
          >
            Email Me
          </a>

          <br />

          <a
            href="https://wa.me/628814557146"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              border: "1px solid #334155",
              borderRadius: "6px",
              color: "white",
              textDecoration: "none",
            }}
          >
            WhatsApp
          </a>

          {/* INFO */}
          <div style={{ marginTop: "20px", opacity: 0.6 }}>
            <p>+62 881-4557-146</p>
            <p>radityagunaldhi@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;