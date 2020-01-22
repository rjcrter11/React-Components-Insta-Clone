// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = (props) => {
  // Add state for the comments
  const [comment] = useState(props.comments);
  console.log(comment);

  return (
    <div>
      {comment.map((comment, index) => {
        return (
          <Comment
            key={index}
            comment={comment}
            timestamp={props.timestamp}
            postId={props.postId}
          />
        );
      })}
      <div className="time-stamp-box">
        <p className="time-stamp"> {props.timestamp}</p>
      </div>
      <CommentInput />
    </div>
  );
};

export default CommentSection;
