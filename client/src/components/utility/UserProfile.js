import React from "react";
import "./UserProfile.css";
import holderjs from "holderjs";

const UserProfile = () => {
  return (
    <div>
      <div className="user-profile-container">
        <img
          className="user-profile-avatar"
          alt="avatar"
          src="holder.js/90x90"
        />
        <h2 className="user-profile-name">Jaden Smith</h2>
        <p className="user-profile-location">San Francisco, CA</p>
      </div>
    </div>
  );
};

export default UserProfile;
