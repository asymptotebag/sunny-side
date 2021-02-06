import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table" style={{margin: "auto"}}>
        <table>
          <tbody>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
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