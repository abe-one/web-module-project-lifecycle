import React from "react";

const UserCard = ({ userData }) => {
  // console.log(userData);
  return (
    <div className="user-card">
      <img
        width="350px"
        src={userData.avatar_url}
        alt={`${userData.login}'s avatar`}
      ></img>
    </div>
  );
};

export default UserCard;
