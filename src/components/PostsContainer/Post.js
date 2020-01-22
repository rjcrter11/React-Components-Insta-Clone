// You will add code in this file

import React, { useState } from "react";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSectionContainer";

import "./Posts.css";

const Post = (props) => {
  // set up state for the likes
  const [likes, setLikes] = useState(props.likes);
  const changeLikes = () => {
    setLikes((likes) => likes + 1);
  };

  return (
    <div className="post-border">
      <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={props.imageUrl} />
      </div>
      <LikeSection likes={likes} changeLikes={changeLikes} />
      <CommentSection
        postId={props.username}
        comments={props.comments}
        timestamp={props.timestamp}
      />
    </div>
  );
};

export default Post;
