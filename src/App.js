import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import Table from './Table';
import Form from './Form';

import "./utilities.css";
import "./App.css";
// import { read } from 'fs-extra';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: "",
      name: "friend",
      nameBox: "",
      eventName: '',
      time: '',
      date: '',
      items: []
    }
  };

  componentDidMount() {
    const greetingMsgs = ["Good Morning", "Hello", "Howdy", "What's cracking"];
    const greeting = greetingMsgs[Math.floor(Math.random() * greetingMsgs.length)];
    // let name = this.getName();
    this.getStoredName();
    this.setState({
      greeting: greeting,
      // name: name,
    });
  }

  handleTypeName = (e) => {
    this.setState({
      nameBox: e.target.value,
    });
  }

  handleChangeName = () => {
    console.log("About to change name to " + this.state.nameBox);
    chrome.storage.sync.set({name: this.state.nameBox}, function() {
      console.log('Name was set to ' + this.state.nameBox);
      this.setState({
        name: this.state.nameBox,
        nameBox: "",
      });
    });
    this.getStoredName();
    
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      eventName: this.state.eventName,
      time: this.state.time,
      date: this.state.date
    });

    this.setState({
      items,
      eventName: '',
      time: '',
      date: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    })
  };

  getStoredName = () => {
    chrome.storage.sync.get(['name'], function(result) {
       console.log('retrieved name: ' + result.name);
       this.setState({
         name: result.name,
       });
    });
  }

  render() {
    let name = this.state.name;
    // console.log("this.state.name = " + name);
    chrome.storage.sync.get(null, function (data) { console.info(data) });
    return (
      <>
      <div className="App-container u-textCenter">
        <h1>{this.state.greeting}, {name}!</h1>

        <Table items={ this.state.items }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newEvent={ this.state.eventName }
          newTime={ this.state.time }
          newDate={ this.state.date } />

      </div>

      <div className="u-flex" style={{justifyContent: "center"}}>
            <input
                type="text"
                placeholder="change name"
                value={this.state.nameBox}
                onChange={this.handleTypeName}
                className="u-input"
                style={{marginRight: "1px"}}
            />
          <button
              type="submit"
              value={this.state.nameBox}
              onClick={this.handleChangeName}
              className="u-submit u-pointer"
              style={{marginLeft: "1px"}}
          > change </button>
          {/* <button className="Modal-close" style={{marginLeft: "var(--xs)"}} onClick={() => {window.location.href = "/profile"}}>back to profile</button> */}
        </div>
      {/* <Router>

      </Router> */}
      </>
    );
  }
}
export default App;