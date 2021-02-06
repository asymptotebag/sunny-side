import React, { Component } from 'react';

class Table extends React.Component {
  constructor(){
    super();

    this.state = {
       selected: false
    }
  }
  toggleSelection = () => {
    this.setState({selected: !this.state.selected})
  }

  render() {
    let row_state = this.state.selected ? "selectedRow" : "nonSelectedRow";
    const items = this.props.items;
    if (items.length === 0) {
      return (<div></div>);
    };
    return (
      <div 
        id="Table" 
        className="u-textMedium" 
        // style={{width: "90%", margin: "auto",}}
      >
        <br/>
        <table style={{width: "90%"}}>
          <tbody>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
            {items.map(item => {
              return (
                <tr class={row_state} onClick={
                  this.toggleSelection.bind(this)
                }>
                  <td>{item.eventName}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;