import React from "react";
import logo from "./logo.svg";

const UserCard = ({
  userObject: {
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
  if (!avatar_url)
    return (
      <>
        <h2>LOADING</h2>
        <img src={logo} width="150px" className="App-logo" alt="logo" />
      </>
    );
  // Loading message

  return (
    <div className="card user-card">
      <img width="300" src={avatar_url} alt={`${login}'s avatar`} />
      <div>
        <h3>{name}</h3>
        <p>{login}</p>
        <p>Location: {location}</p>
        <p>
          Profile: <a href={html_url}>{html_url}</a>
        </p>
        <p>Follows:{followers}</p>
        <p>Following: {following}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
