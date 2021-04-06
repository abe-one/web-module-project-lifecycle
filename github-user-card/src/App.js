import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import axios from "axios";

import UserCard from "./UserCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/abe-one/following")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    axios
      .get("https://api.github.com/users/abe-one")
      .then((res) => this.setState({ userData: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My GitHub Profile</h1>
          <UserCard userData={this.state.userData} />
          <h2>My Follows</h2>
          <h2>My Followers</h2>
        </header>
      </div>
    );
  }
}

export default App;
