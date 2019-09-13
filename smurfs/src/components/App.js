import React, { Component } from "react";
import "./App.css";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='app-head'>
          <h1>SMURFS Village List.</h1>
          <p>Create your own Smurf Village and watch as the residents appear on your list!</p>
          <SmurfForm />
        </div>

        <SmurfList />
      </div>
    );
  }
}

export default App;
