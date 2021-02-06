import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import "./App.css";
import Table from './Table';
import Form from './Form';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      time: '',
      date: '',
      items: []
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [this.state.items];

    items.push({
      eventName: this.state.eventName,
      time: this.state.time,
      date: this.state.date
    });
  }

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    const greetingMsgs = ["Good Morning", "Hello", "Howdy", "What's cracking,"];
    const greeting = greetingMsgs[Math.floor(Math.random() * greetingsMsgs.length)];
    return (
      <>
      <div className="App-container">
        <h1>{greeting}, Kelly</h1>

        <Table items={ this.state.items }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newEvent={ this.state.eventName }
          newTime={ this.state.time }
          newDate={ this.state.date } />

      </div>
      {/* <Router>

      </Router> */}
      </>
    );
  }
}
export default App;