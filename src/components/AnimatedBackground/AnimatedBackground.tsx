const AnimatedBackground = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(56,189,248,0.15)",
          filter: "blur(80px)",
          animation: "floatGlow1 10s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-180px",
          right: "-120px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "rgba(14,165,233,0.15)",
          filter: "blur(90px)",
          animation: "floatGlow2 12s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "35%",
          left: "45%",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.10)",
          filter: "blur(70px)",
          animation: "floatGlow3 8s ease-in-out infinite",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default AnimatedBackground;