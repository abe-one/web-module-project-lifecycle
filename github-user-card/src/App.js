import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import axios from "axios";

import UserCard from "./UserCard";
import MiniCard from "./MiniCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios
        .get("https://api.github.com/users/abe-one/following")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      axios
        .get("https://api.github.com/users/abe-one")
        .then((res) => this.setState({ userData: res.data }))
        .catch((err) => console.log(err));
    }, 3000);
  }

  // ADD LOADING FUNCTIONALITY
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My GitHub Profile</h1>
          <UserCard userData={this.state.userData} />
          <h2>My Follows</h2>
          <MiniCard miniUser={this.state.userData} />
          <h2>My Followers</h2>
        </header>
      </div>
    );
  }
}

export default App;
