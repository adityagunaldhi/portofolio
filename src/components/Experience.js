const experiences = [
  {
    company: "PT Kreasi Semesta Mega (Plaza Group)",
    role: "Leader Operation",
    period: "Apr 2024 - Now",
    tasks: [
      "Leading daily activities of the team, optimizing business processes, and managing resources to achieve maximum efficiency and company targets.",
    ],
  },
  {
    company: "PT Shinari Putra Kencana (Hyundai)",
    role: "Service Advisor",
    period: "Mei 2023 - Apr 2024",
    tasks: [
      "Responsible for serving the needs of customers who come and leave the workshop by listening, analyzing, and explaining vehicle damage, making time and cost estimates to achieve customer satisfaction, and maintaining the tidiness of customer vehicle data.",
    ],
  },
  {
    company: "PT Sicepat Express",
    role: "Branch Admin",
    period: "Sept 2021 - Sept 2022",
    tasks: [
      "Manage all administrative operations, daily finance, inventory, and reporting at branch offices to ensure smooth business operations, work efficiency, and compliance with company procedures.",
    ],
  },
  {
    company: "PT Mitradeka Mandiri (Toyota)",
    role: "Technician",
    period: "Mar 2017 - Sept 2021",
    tasks: [
      "Diagnose, repair, and maintain vehicle components to ensure optimal performance and driving safety.",
    ],
  },
];
function Experience() {
    return (
    <section id="experience" style={{ padding: "100px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
         Work Experience
        </h2>

        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              padding: "20px",
              background: "#1e293b",
              borderRadius: "10px",
              border: "1px solid #334155",
            }}
          >
            {/* Company */}
            <h3 style={{ fontWeight: "bold" }}>
              {exp.company}
            </h3>

            {/* Role + Period */}
            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              {exp.role} • {exp.period}
            </p>

            {/* Tasks */}
            <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
              {exp.tasks.map((task, i) => (
                <li key={i} style={{ marginBottom: "5px" }}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

  export default Experience;