import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div id="Form" className="u-textMediumSmall">
        <h3 className="u-textCenter">Add a new schedule item or task:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="eventName">
          Event:&nbsp;
          <input id="eventName" value={this.props.newEvent} 
            type="text" name="eventName"
            onChange={this.props.handleInputChange}
            className="u-input" />
          </label>

          <label htmlFor="time">
          &nbsp;&nbsp;&nbsp;Time:&nbsp;
          <input id="time" value={this.props.newTime} 
            type="time" name="time"
            onChange={this.props.handleInputChange}
            style={{borderRadius: "0px"}}
            className="u-input" />
          </label>

          <label htlmFor="date">
          &nbsp;&nbsp;&nbsp;Date:&nbsp;
          <input id="date" value={this.props.newDate} 
            type="date" name="date"
            onChange={this.props.handleInputChange}
            style={{borderRadius: "0 var(--xs) var(--xs) 0"}}
            className="u-input" />
          </label>
          <button type="submit" value="Submit" style={{borderRadius: "var(--xs)"}} className="u-submit u-pointer">
            Add Event</button>
        </form>
      </div>
    );
  }
}

export default Form;