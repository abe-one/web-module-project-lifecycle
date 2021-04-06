import "./App.css";

import React, { Component } from "react";
import axios from "axios";

import UserCard from "./UserCard";
import MiniCard from "./MiniCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userObject: {},
      followingArray: [],
      followerArray: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/abe-one")
      .then((res) => this.setState({ userObject: res.data }))
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/abe-one/following")
      .then((res) => this.setState({ followingArray: res.data }))
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/abe-one/followers")
      .then((res) => this.setState({ followerArray: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My GitHub Profile</h1>
          <UserCard userObject={this.state.userObject} />

          <h2>My Followers</h2>
          <div className="arrayed-div">
            {this.state.followerArray.map((follower) => (
              <MiniCard miniUser={follower} />
            ))}
          </div>

          <h2>My Follows</h2>
          <div className="arrayed-div">
            {this.state.followingArray.map((follow) => (
              <MiniCard miniUser={follow} />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
