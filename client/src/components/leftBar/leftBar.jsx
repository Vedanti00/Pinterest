import React from "react";
import "./leftBar.css";

function leftBar() {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcons">
          <img src="/general/logo.png" alt="logo-icon" />
        </a>

        <a href="/" className="menuIcons">
          <img src="/general/home.svg" alt="home-icon" />
        </a>

        <a href="/" className="menuIcons">
          <img src="/general/create.svg" alt="create-icon" />
        </a>

        <a href="/" className="menuIcons">
          <img src="/general/updates.svg" alt="updates-icon" />
        </a>

        <a href="/" className="menuIcons">
          <img src="/general/messages.svg" alt="messages-icon" />
        </a>
        <div className="menuIcons">
          <a href="/" className="menuIcons">
            <img src="/general/messages.svg" alt="messages-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default leftBar;
