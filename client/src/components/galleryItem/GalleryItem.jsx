import React from "react";
import "./galleryItem.css";

function GalleryItem({ item }) {
  return (
    <div
      className="galleryItem"
      style={{ gridRow: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* making below images start from where first row above image is ending */}
      <img src={item.media} alt="" />
    </div>
  );
}

export default GalleryItem;
