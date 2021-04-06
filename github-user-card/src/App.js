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
      .get("https://api.github.com/users/abe-one")
      .then((res) => this.setState({ userData: res.data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserCard userData={this.state.userData} />
        </header>
      </div>
    );
  }
}

export default App;
