import React from "react";
import logo from "./logo.svg";

const MiniCard = ({ miniUser: { avatar_url, login, name, html_url } }) => {
  if (!avatar_url)
    return (
      <>
        <h3>LOADING</h3>
        <img src={logo} width="150px" className="App-logo" alt="logo" />
      </>
    );
  //Loading message

  return (
    <div className="card mini-card">
      <a href={html_url}>
        <img width="200px" src={avatar_url} alt={`${login}'s avatar`} />
      </a>
      <div>
        <h6>{name}</h6>
        <p>{login}</p>
        <a href={html_url}>{html_url}</a>
      </div>
    </div>
  );
};

export default MiniCard;
