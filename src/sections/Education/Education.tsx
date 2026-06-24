const Education = () => {
  return (
    <section
      id="education"
      style={{
        padding: "100px 10%",
        background: "#020617",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#38bdf8",
          fontSize: "42px",
          marginBottom: "50px",
        }}
      >
        Education
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <div style={card}>
          <h3>BSc (Hons) Information Technology</h3>
          <p>Sri Lanka Institute of Information Technology (SLIIT)</p>
          <p>2022 - Present</p>
        </div>

        <div style={card}>
          <h3>G.C.E Advanced Level - 2021</h3>
          <p>Combined Maths - S</p>
          <p>Chemistry - S</p>
          <p>Physics - S</p>
        </div>

        <div style={card}>
          <h3>G.C.E Ordinary Level - 2018</h3>
          <p>2A | 3B | 4C</p>
        </div>
      </div>
    </section>
  );
};

const card = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "15px",
  marginBottom: "20px",
  border: "1px solid #38bdf8",
};

export default Education;