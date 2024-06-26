import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./NewPostPage.scss";
import PostForm from "../NewPostPageItem/PostForm";
import PostDescription from "../NewPostPageItem/PostDescription";
import PostImagesForm from "../NewPostPageItem/PostImagesForm";

const NewPostPage = () => {
  const [formToShow, setFormToShow] = useState(null);

  const handleShowPostForm = () => setFormToShow('post');
  const handleShowPostDescriptionForm = () => setFormToShow('postDescription');
  const handleShowPostImagesForm = () => setFormToShow('postImages');

  return (
    <div className="containerDiv">
      <div className="firstDiv">
        <button onClick={handleShowPostForm}>Add Post</button>
        <button onClick={handleShowPostDescriptionForm}>Add Post Description</button>
        <button onClick={handleShowPostImagesForm}>Add Post Images</button>
      </div>
      
      <div className="formContainer">
        {formToShow === 'post' && <PostForm />}
        {formToShow === 'postDescription' && <PostDescription />}
        {formToShow === 'postImages' && <PostImagesForm />}
      </div>
    </div>
  );
};

export default NewPostPage;
