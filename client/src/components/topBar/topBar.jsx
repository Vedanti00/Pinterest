import React from "react";
import UserButton from "../userButton/userButton";
import "./topBar.css";
import Images from "../images/Images";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <Images src="/general/search.svg" alt="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
