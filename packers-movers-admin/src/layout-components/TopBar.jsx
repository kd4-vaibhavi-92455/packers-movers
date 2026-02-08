const TopBar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: "260px",
        right: 0,
        height: "40px",
        backgroundColor: "#0E3B65",
        borderBottom: " solid 2px #0E3B65",
        // background:
        // "linear-gradient(to bottom, rgba(17,113,186,1), rgba(17,113,186,0.4))",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      <strong>SMOOVE PACKERS AND MOVERS</strong>
    </div>
  );
};

export default TopBar;
