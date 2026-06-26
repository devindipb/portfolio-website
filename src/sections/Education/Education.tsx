import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
} from "react-icons/fa";

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      title: "BSc (Hons) Information Technology",
      institute: "Sri Lanka Institute of Information Technology (SLIIT)",
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
      description: "Combined Mathematics - S | Chemistry - S | Physics - S",
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
    <section id="education" className="education-section">
      <h2 className="section-title">Education Journey</h2>

      <div className="timeline-wrapper">
        <div className="timeline-line" />
        <div className="timeline-list">
          {education.map((item, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-icon">
                <div
                  className="timeline-icon-inner"
                  style={{
                    background: `${item.color}20`,
                    border: `3px solid ${item.color}`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
              </div>

              <div className="timeline-card">
                <div className="timeline-card-header">
                  <h3>{item.title}</h3>
                  <span className="timeline-year">{item.year}</span>
                </div>

                <h4 className="timeline-institute">{item.institute}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
