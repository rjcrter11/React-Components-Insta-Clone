import React from "react";

const LikeSection = (props) => {
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i
            className="far fa-heart heart like-icons"
            onClick={props.changeLikes}
          />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment bubble like-icons" />
        </div>
      </div>
      <p className="like-number"> {props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
