import React from "react";

const MiniCard = ({ miniUser: { avatar_url, login, name, html_url } }) => {
  return (
    <div className="mini-card">
      <a href={html_url}>
        <img width="50px" src={avatar_url} alt={`${login}'s avatar`} />
      </a>
    </div>
  );
};

export default MiniCard;
