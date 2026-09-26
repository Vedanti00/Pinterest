import React from "react";
import "./galleryItem.css";
import { Link } from "react-router";
import Images from "../images/Images";

function GalleryItem({ item }) {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className="galleryItem"
      style={{ gridRow: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* making below images start from where first row above image is ending */}
      {/* <img src={item.media} alt="" /> */}

      <Images src={item.media} alt={item.alt} w={372} h={optimizedHeight} />

      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Images src="/general/share.svg" alt="share-icon" />
        </button>
        <button>
          <Images src="/general/more.svg" alt="share-icon" />
        </button>
      </div>
    </div>
  );
}

export default GalleryItem;
