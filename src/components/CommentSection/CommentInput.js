import React from "react";

const CommentInput = (props) => {
  return (
    <form className="comment-form" onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder={"Add comment"}
        onChange={props.changeComment}
      />
      <i class="fas fa-ellipsis-h"></i>
    </form>
  );
};

export default CommentInput;
