import React from "react";
import Images from "../../components/images/Images";
import "./profilepage.css";
import Gallery from "../../components/gallery/Gallery";
import Collections from "../../components/collections/Collections";

const ProfilePage = () => {
  const [type, setType] = React.useState("saved");
  return (
    <div className="profilePage">
      <Images
        className="profileImg"
        w={100}
        h={100}
        src="/general/noAvatar.png"
        alt="User-Avatar"
      />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johndoe</span>
      <div className="followCounts">10 followers . 5 following</div>
      <div className="profileInteractions">
        <Images src="/general/share.svg" alt="Share-Icon" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Images src="/general/more.svg" alt="More-Icon" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
