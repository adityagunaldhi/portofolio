const educationList = [
  {
    school: "Universitas Informatika dan Bisnins Indonesia",
    major: "Bachelor of Informatics Engineering",
    period: "2022 - 2026",
    desc: "Bandung, Indonesia",
    gpa: "3.63/4.00",
},
  {
    school: "SMK Negeri 6 Bandung",
    major: "Automotive Engineering Major",
    period: "2013 - 2016",
    desc: "Bandung, Indonesia",
  },
];

function Education() {
  return (
    <section
      id="education"
      style={{
        scrollMarginTop: "90px",
        padding: "100px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Education
        </h2>

        {educationList.map((edu, index) => (
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
            {/* School */}
            <h3 style={{ fontWeight: "bold" }}>
              {edu.school}
            </h3>

            {/* Major + Period */}
            <p style={{ fontSize: "14px", opacity: 0.8 }}>
              {edu.major} • {edu.period}
            </p>

            {/* Description */}
            <p style={{ marginTop: "10px" }}>
              {edu.desc}
            </p>
 
            {/* GPA (if available) */}
            {edu.gpa && (
                <div
              style={{
                display: "inline-block", 
                marginTop: "10px",
                padding: "5px 10px",
                background: "0f172a",
                borderRadius: "6px",
                border: "1px solid #334155",
                fontSize: "12px", 
            }}>
                GPA: <strong>{edu.gpa}</strong>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;