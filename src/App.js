import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div className="App-container">
        <h1>Hello Kelly</h1>
        <h1>Hello Emily</h1>
        <h1>Hello Helena</h1> 
      </div>
      {/* <Router>

      </Router> */}
      </>
    );
  }
}
export default App;