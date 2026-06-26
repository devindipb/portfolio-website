import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
} from "react-icons/fa";

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "BSc (Hons) Information Technology",
      institute:
        "Sri Lanka Institute of Information Technology (SLIIT)",
      year: "2022 - Present",
      description:
        "Final Year Undergraduate specializing in Software Engineering, Full Stack Development, Cloud Computing and Artificial Intelligence.",
      color: "#38bdf8",
    },
    {
      icon: <FaUniversity />,
      title: "G.C.E Advanced Level",
      institute: "Mathematics Stream",
      year: "2021",
      description:
        "Combined Mathematics - S | Chemistry - S | Physics - S",
      color: "#22c55e",
    },
    {
      icon: <FaSchool />,
      title: "G.C.E Ordinary Level",
      institute: "C.W.W. Kannangara Central College",
      year: "2018",
      description: "Successfully Completed with 2A | 3B | 4C",
      color: "#f59e0b",
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "100px 8%",
        background: "#020617",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          color: "#38bdf8",
          marginBottom: "70px",
          fontWeight: 700,
        }}
      >
        🎓 Education Journey
      </h2>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Timeline */}
        <div
          style={{
            position: "absolute",
            left: "35px",
            top: 0,
            bottom: 0,
            width: "3px",
            background:
              "linear-gradient(#38bdf8,#0ea5e9,#38bdf8)",
            opacity: ".4",
          }}
        />

        {education.map((item, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(56,189,248,.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              display: "flex",
              gap: "25px",
              marginBottom: "40px",
              transition: ".35s",
            }}
          >
            {/* Timeline Icon */}
            <div
              style={{
                minWidth: "70px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: `${item.color}20`,
                  border: `3px solid ${item.color}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "30px",
                  color: item.color,
                  zIndex: 5,
                }}
              >
                {item.icon}
              </div>
            </div>

            {/* Card */}
            <div
              style={{
                flex: 1,
                background: "rgba(30,41,59,.88)",
                backdropFilter: "blur(18px)",
                borderRadius: "22px",
                padding: "30px",
                border:
                  "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  {item.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: `${item.color}20`,
                    color: item.color,
                    padding: "8px 16px",
                    borderRadius: "30px",
                    fontWeight: 700,
                  }}
                >
                  <FaCalendarAlt />
                  {item.year}
                </div>
              </div>

              <h4
                style={{
                  color: "#38bdf8",
                  marginBottom: "15px",
                  fontSize: "22px",
                }}
              >
                {item.institute}
              </h4>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "17px",
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;