import React, { Component } from 'react';

class Table extends React.Component {
  constructor(props){
    super(props);
    let selections = [];
    for (let i=0; i<this.props.items.length; i++) {
      selections.push(false);
    }
    this.state = {
      //  selected: false
      selections: selections,
    };
    this.toggleSelection = this.toggleSelection.bind(this);
  }
  toggleSelection = (idx) => {
    // this.setState({selected: !this.state.selected})
    let newSelections = [];
    for (let i=0; i<this.state.selections.length; i++) {
      if (i === idx) {
        newSelections.push(!this.state.selections[i]);
      } else {
        newSelections.push(this.state.selections[i]);
      }
    }
    this.setState({
      selections: newSelections,
    });
  }

  getRowState = (idx) => {
    return (this.state.selections[idx] ? "selectedRow" : "nonSelectedRow");
  }

  render() {
    // let row_state = this.state.selected ? "selectedRow" : "nonSelectedRow";
    const items = this.props.items;
    console.log(this.state.selections);
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
        <table style={{width: "90%", marginLeft: "var(--xl)"}}>
          <tbody>
            <tr>
              <th>Event</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
            {items.map((item, index) => {
              let row_state = this.getRowState(index);
              return (
                <tr value={index} className={row_state} onClick={() => this.toggleSelection(index)}>
                  <td>{item.eventName}</td>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
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