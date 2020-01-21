//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSection from "../CommentSection/CommentSectionContainer";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.data.map((data, index) => (
        <Post key={index} {...data} />
      ))}
    </div>
  );
};

export default PostsPage;
