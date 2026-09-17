import React from "react";
import "./userButton.css";
import { useState } from "react";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  // TEMP USER
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="avatar-icon" />
      <img 
      onClick={() => setOpen((prev) => !prev)}
      src="/general/arrow.svg" alt="arrow-icon" className="arrow" />
      {open && (<div className="userOptions">
        <div className="userOption">Profile</div>
        <div className="userOption">Settings</div>
        <div className="userOption">Logout</div>
      </div>)}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
};

export default UserButton;
