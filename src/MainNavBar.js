import { useState } from "react";

export default function MainNavBar({ isDark, onShowSideBar }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleArrowClick() {
    setIsOpen((s) => !s);
  }

  function handleSubmit(e) {
    e.preventDefault();
    document.activeElement.blur();
  }

  return (
    <nav className="secondary-nav">
      <div className="dashboard">
        <div className="hamburger" onClick={() => onShowSideBar(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4>Dashboard</h4>
        <form onSubmit={handleSubmit}>
          <input className="input" placeholder="Search..." type="text" />
        </form>
      </div>
      <div className="other">
        <div className="date">
          <img
            className="calender"
            src="solar_calendar-linear.png"
            alt="calender"
          />
          <p>January 24, 2024</p>
        </div>
        <div className="bell">
          <img
            src={`${
              isDark ? "solar_bell-outline-light.png" : "solar_bell-outline.png"
            }`}
            alt="notification--bell"
          />
        </div>
        <div className="profile">
          <div className="avatar">
            <img src="IMG-20230408-WA0004.jpg" alt="avi" />
          </div>
          <div className="text">
            <p className="name">Femi Majek</p>
            <p className="email">Majek@gmail.com</p>
          </div>
          <div className="arrow-down" onClick={handleArrowClick}>
            <img src="Arrow---down-2.png" alt="avi" />
          </div>
          {isOpen && <ProfileModal />}
        </div>
      </div>
    </nav>
  );
}

function ProfileModal() {
  return (
    <div className="profile-modal">
      <ul>
        <li>Bookmarks</li>
        <li>Help</li>
        <li>Edit Profile</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
