const TopBar = ({ color = "25, 118, 210" }) => {
  return (
    <div
      style={{
        "--bar-color": color,
        position: "fixed",
        top: 0,
        left: 260,
        right: 0,
        height: "56px",
        background: `
          linear-gradient(
            to bottom,
            rgba(var(--bar-color), 1),
            rgba(var(--bar-color), 0.4)
          )
        `,
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        color: "#fff",
        zIndex: 1000,
      }}
    >
      Topbar
    </div>
  );
};

export default TopBar;
