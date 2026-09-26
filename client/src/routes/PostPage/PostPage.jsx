import React from "react";
import Images from "../../components/images/Images";
import PostInteractions from "../../components/postInteractions/PostInteractions";
import { Link } from "react-router";
import Comments from "../../components/comments/Comments";
import "./postpage.css";

const PostPage = () => {
  return (
    <div className="postPage">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
      <div className="postContainer">
        <div className="postImg">
          <Images src="/pins/pin1.jpeg" alt="post-img" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/john" className="postUser">
            <Images src="/general/noAvatar.png" alt="User-Avatar" />
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
