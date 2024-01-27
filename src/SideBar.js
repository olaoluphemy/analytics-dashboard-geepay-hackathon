export default function SideBar({ isDark, onSetDark, navEl }) {
  return (
    <nav ref={navEl} className="nav-bar">
      <div className="top-nav">
        <div className="bolt">
          <img src="Vector1.png" alt="bolt.png" />
        </div>
        <div className="icons">
          <img
            src={`${isDark ? "navbar-squares.png" : "category.png"}`}
            alt="bolt.png"
          />
        </div>
        <div className="icons">
          <img src="Frame 12.png" alt="bolt.png" />
        </div>
        <div className="icons">
          <img src="profile-2user.png" alt="bolt.png" />
        </div>
        <div className="icons">
          <img src="box.png" alt="bolt.png" />
        </div>
        <div className="icons">
          <img src="discount-shape.png" alt="bolt.png" />
        </div>
        <div className="icons">
          <img src="info-circle.png" alt="bolt.png" />
        </div>
        <div
          style={{
            backgroundColor: isDark ? "#fff" : "rgba(178,171,171,0.3)",
            borderRadius: "500px",
          }}
          onClick={() => onSetDark((s) => !s)}
        >
          <div className="icons">
            <img
              style={{
                backgroundColor: `${isDark ? "" : "#34CAA5"}`,
                borderRadius: "50%",
                padding: "0.4rem",
              }}
              src={`${isDark ? "bulb-dark.png" : "Frame 427319677.png"}`}
              alt="bolt.png"
            />
          </div>
          <div className="icons">
            <img
              style={{
                backgroundColor: `${isDark ? "#34CAA5" : ""}`,
                borderRadius: "50%",
                padding: "0.5px",
              }}
              src={`${isDark ? "moon-light.png" : "moon 1.png"}`}
              alt="bolt.png"
            />
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="icons">
          <img src="arrow-right.png" alt="bolt.png" />
        </div>
        <div className="icons">
          <img src="Frame 001.png" alt="bolt.png" />
        </div>
        <div className="icons">
          <img src="Frame 002.png" alt="bolt.png" />
        </div>
      </div>
    </nav>
  );
}
