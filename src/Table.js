import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div 
        id="Table" 
        className="u-textMedium" 
        // style={{width: "90%", margin: "auto",}}
      >
        <table style={{width: "90%"}}>
          <tbody>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
            {items.map(item => {
              return (
                <tr class="row-item">
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