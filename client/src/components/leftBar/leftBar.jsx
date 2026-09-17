import React from "react";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <img src="/general/logo.png" alt="logo-icon" />
        </a>

        <a href="/" className="menuIcon">
          <img src="/general/home.svg" alt="home-icon" />
        </a>

        <a href="/" className="menuIcon">
          <img src="/general/create.svg" alt="create-icon" />
        </a>

        <a href="/" className="menuIcon">
          <img src="/general/updates.svg" alt="updates-icon" />
        </a>

        <a href="/" className="menuIcon">
          <img src="/general/messages.svg" alt="messages-icon" />
        </a>
      </div>
      <a href="/" className="menuIcon">
            <img src="/general/settings.svg" alt="settings-icon" />
          </a>
    </div>
  );
};

export default LeftBar;
