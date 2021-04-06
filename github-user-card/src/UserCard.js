import React from "react";

const UserCard = ({
  userData: {
    avatar_url,
    login,
    name,
    bio,
    location,
    html_url,
    followers,
    following,
  },
}) => {
  // console.log(userData);
  return (
    <div className="user-card">
      <img width="200px" src={avatar_url} alt={`${login}'s avatar`} />
      <div>
        <h3>{name}</h3>
        <p>{login}</p>
        <p>Location: {location}</p>
        <p>Follows:{followers}</p>
        <p>Following: {following}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
