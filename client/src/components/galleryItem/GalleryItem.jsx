import React from "react";
import "./galleryItem.css";
import { Link } from "react-router";

function GalleryItem({ item }) {
  return (
    <div
      className="galleryItem"
      style={{ gridRow: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* making below images start from where first row above image is ending */}
      <img src={item.media} alt="" />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="share-icon" />
        </button>
        <button>
          <img src="/general/more.svg" alt="share-icon" />
        </button>
      </div>
    </div>
  );
}

export default GalleryItem;
