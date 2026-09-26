import React from "react";
import Images from "../images/Images";
import "./postInteractions.css";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Images src="/general/react.svg" alt="react-icon" />
        273
        <Images src="/general/share.svg" alt="share-icon" />
        <Images src="/general/more.svg" alt="more-icon" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteractions;
