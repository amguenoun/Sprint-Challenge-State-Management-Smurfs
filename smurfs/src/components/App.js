import React, { Component } from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS Village List.</h1>
        <div>Create your own Smurf Village and watch as the residents appear on your list!</div>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
