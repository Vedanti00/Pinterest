import React from "react";
import "./leftBar.css";
import Images from "../images/Images";
import { Link } from "react-router";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <Images src="/general/logo.png" alt="logo-icon" />
        </Link>

        <Link to="/" className="menuIcon">
          <Images src="/general/home.svg" alt="home-icon" />
        </Link>

        <Link to="/create" className="menuIcon">
          <Images src="/general/create.svg" alt="create-icon" />
        </Link>

        <Link to="/" className="menuIcon">
          <Images src="/general/updates.svg" alt="updates-icon" />
        </Link>

        <Link to="/" className="menuIcon">
          <Images src="/general/messages.svg" alt="messages-icon" />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
            <Images src="/general/settings.svg" alt="settings-icon" />
          </Link>
    </div>
  );
};

export default LeftBar;
