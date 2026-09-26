import React, { useState } from "react";
import Images from "../images/Images";
import EmojiPicker from "emoji-picker-react";
import "./comments.css";

const Comments = () => {

    const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* Comment */}
        <div className="comment">
          <Images src="/general/noAvatar.png" alt="User-Avatar" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc
              neque, suscipit id lectus sit amet, vestibulum ullamcorper massa.
              Aenean ornare convallis ornare. Curabitur hendrerit justo id justo
              iaculis pellentesque vitae vitae libero. Praesent quam odio,
              tincidunt eu tempus nec, commodo ac velit. Morbi in ullamcorper
              lacus, nec dignissim mauris. Aliquam in nisi nec odio blandit
              iaculis non et velit. Nulla venenatis tincidunt leo, sed viverra
              erat congue aliquet. Nunc sodales venenatis turpis, non pretium mi
              semper vitae. Maecenas magna massa, aliquet eu euismod eu, rhoncus
              vitae est. Duis commodo arcu non tincidunt porttitor. Ut tincidunt
              nunc at tellus ornare, quis pharetra nisl lobortis. Donec quis
              eros egestas, lobortis quam mattis, elementum metus. Morbi
              fermentum sagittis lacus. Aenean eget malesuada tortor, id
              eleifend nibh. Cras non velit tellus. Maecenas magna massa,
              aliquet eu euismod eu, rhoncus vitae est. Duis commodo arcu non
              tincidunt porttitor. Ut tincidunt nunc at tellus ornare, quis
              pharetra nisl lobortis. Donec quis eros egestas, lobortis quam
              mattis, elementum metus. Morbi fermentum sagittis lacus. Aenean
              eget malesuada tortor, id eleifend nibh. Cras non velit tellus.
            </p>
            <span className="commentTime">2 hours ago</span>
          </div>
        </div>
        <div className="comment">
          <Images src="/general/noAvatar.png" alt="User-Avatar" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Quisque nunc
              neque, suscipit id lectus sit amet, vestibulum ullamcorper massa.
              Aenean ornare convallis ornare. Curabitur hendrerit justo id justo
              iaculis pellentesque vitae vitae libero. Praesent quam odio,
              tincidunt eu tempus nec, commodo ac velit. Morbi in ullamcorper
              lacus, nec dignissim mauris. Aliquam in nisi nec odio blandit
              iaculis non et velit. Nulla venenatis tincidunt leo, sed viverra
              erat congue aliquet. Nunc sodales venenatis turpis, non pretium mi
              semper vitae. Maecenas magna massa, aliquet eu euismod eu, rhoncus
              vitae est. Duis commodo arcu non tincidunt porttitor. Ut tincidunt
              nunc at tellus ornare, quis pharetra nisl lobortis. Donec quis
              eros egestas, lobortis quam mattis, elementum metus. Morbi
              fermentum sagittis lacus. Aenean eget malesuada tortor, id
              eleifend nibh. Cras non velit tellus.
            </p>
            <span className="commentTime">2 hours ago</span>
          </div>
        </div>
        <form className="commentForm">
          <input type="text" placeholder="Write a comment..." />
          <div className="emoji">
            <div onClick={() => setOpen((prev) => !prev)}>😊</div>
            {open && <div className="emojiPicker">
              <EmojiPicker />
            </div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
