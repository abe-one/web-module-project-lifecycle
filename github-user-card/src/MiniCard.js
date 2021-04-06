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
    <div className="mini-card">
      <a href={html_url}>
        <img width="50px" src={avatar_url} alt={`${login}'s avatar`} />
      </a>
      <div>
        <h5>{name}</h5>
        <p>{login}</p>
        <p>
          Profile: <a href={html_url}>{html_url}</a>
        </p>
      </div>
    </div>
  );
};

export default MiniCard;
