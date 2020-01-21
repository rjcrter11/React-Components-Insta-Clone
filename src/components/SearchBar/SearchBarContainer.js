// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <div className="logo-wrapper">
          <i className="fab fa-instagram logo-image" />
        </div>
        <div className="insta-wrapper">
          <p>Instagram</p>
        </div>
      </div>
      <form className="search-form">
        <span className="fas fa-search mag"></span>
        <input type="text" placeholder="Search" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass top-icons" />
        </div>
        <div className="social">
          <i className="far fa-heart top-icons" />
        </div>
        <div className="social">
          <i className="far fa-user-circle top-icons" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
