import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="eventName">
          Event:
          <input id="eventName" value={this.props.newEvent} 
            type="text" name="eventName"
            onChange={this.props.handleInputChange} />
          </label>

          <label htmlFor="time">
          Time:
          <input id="time" value={this.props.newTime} 
            type="time" name="time"
            onChange={this.props.handleInputChange} />
          </label>

          <label htlmFor="date">
          Date:
          <input id="date" value={this.props.newDate} 
            type="date" name="date"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Add Event</button>
        </form>
      </div>
    );
  }
}

export default Form;