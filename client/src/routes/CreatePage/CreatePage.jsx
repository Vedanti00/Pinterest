import React from "react";
import Images from "../../components/images/Images";
import "./createpage.css";

const CreatePage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Images src="/general/upload.svg" alt="Upload-Icon" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high-quality .jpg files less than 20MB. The
            maximum image size is 20MB. Use images that are at least 600px wide.
          </div>
        </div>
        <form className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Add your title"
              name="title"
              id="title"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="description">Description</label>
            <textarea
              rows={6}
              type="text"
              id="description"
              placeholder="Add detailed description"
              name="description"
              id="description"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              id="link"
              placeholder="Add your link"
              name="link"
              id="link"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="board">Boards</label>
            <select name="board" id="board">
              <option value="board1">Board 1</option>
              <option value="board2">Board 2</option>
              <option value="board3">Board 3</option>
            </select>
          </div>
          <div className="createFormItem">
            <label htmlFor="tags">Tags Topics</label>
            <input
              type="text"
              id="tags"
              placeholder="Add tags"
              name="tags"
              id="tags"
            />
            <small>Don't&apos; worry, people want to see your tags</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
