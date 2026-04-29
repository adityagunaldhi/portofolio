function Projects() {
  const projectList = [
  {
    title: "Live Object Detection With YOLOv11 For Traffic Detection",
    description: ["Developed a real-time vehicle detection system using YOLOv11 to identify and classify vehicles from traffic video streams",
      "Optimized model performance with OpenVINO to achieve faster and more efficient real-time inference",
      "Implemented traffic density analysis by processing detection results to monitor and evaluate road conditions"
    ],
    image: "/images/traffic_detection.png",
    tech: ["Python", "YOLOv11", "OpenCV", "OpenVINO"],
    link: "https://github.com/adityagunaldhi/Traffic-detection",
  },
  {
    title: "Live Attendance System With Face Recognition",
    description: ["Developed a face recognition-based attendance system using deep learning",
      "Implemented real-time face detection and recognition using pre-trained models",
      "Integrated the system with a database to store and manage attendance records"
    ],
    image: "/images/face_attendance.png",
    tech: ["Python", "Face Recognition","Insight Face", "OpenCV"],
    link: "https://github.com/adityagunaldhi/face_attendance",
  },
  {
    title: "Website Costumer Satisfaction",
    description: ["Developed a customer satisfaction web application using Express.js to collect and manage survey data",
        "Integrated WhatsApp API using WebSocket to automate survey distribution and customer interaction",
        "Implemented real-time data handling for processing and storing customer feedback efficiently"
    ],
    image: "/images/csat.png",
    tech: ["JavaScript", "Express", "MySQL"],
    link: "https://github.com/adityagunaldhi/CSAT",
  },
  {
    title: "Simple Website Stock Opname Bill of Material",
    description: ["Developed a web-based stock opname system to manage and monitor Bill of Materials (BOM) inventory",
        "Implemented automated stock tracking to update material quantities based on usage and transactions",
        "Designed a database-driven system using Express.js and MySQL for efficient inventory management"
    ],
    image: "/images/stock.png",
    tech: ["JavaScript", "Express", "MySQL"],
    link: "https://github.com/adityagunaldhi/stockopname",
  },
  {
    title: "Cinema Ticket Booking System",
    description: ["Developed an online cinema ticket booking system",
        "Developed seat reservation and scheduling system for efficient booking flow",
        "Designed backend architecture to handle ticket transactions and data management"
    ],
    image: "/images/cinema.jpg",
    tech: ["JavaScript", "Node.js"],
    link: "https://github.com/adityagunaldhi/Bacod_Cinema",
  }
];

  return (
  <section id="projects" style={{ background: "#0f172a", padding: "100px 20px" }}>
    <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
      <h2>Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1000px",
        }}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
          <div style={{padding: "20px"}}>
            <h3>{project.title}</h3>
            <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                {project.description.map((desc, i) => (
                    <li key={i} style={{ marginBottom: "5px" }}>
                        {desc}
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {project.tech.map((tech, i) => (
                <span
                    key={i}
                    style={{
                        padding: "5px 10px",
                        background: "#3b82f6",
                        borderRadius: "6px",
                        fontSize: "12px",
                    }}
                >
                    {tech}
                    </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "15px",
                padding: "8px 16px",
                background: "#3b82f6",
                borderRadius: "6px",
                color: "white",
                fontSize: "14px",
            }}
        >
            Visit Project →
        </a>
          </div>
          </div>))}
      </div>
    </div>
  </section>
);
}
export default Projects;