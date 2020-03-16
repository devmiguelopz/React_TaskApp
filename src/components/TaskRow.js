import React, { Component } from 'react'
export class TaskRow extends Component{
  constructor(props){
    super();
  }
  render(){
    return (
  <tr key={this.props.task.name}>
    <td>{this.props.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={this.props.task.done}
        onChange={() => this.props.toggleTask(this.props.task)}
      />
    </td>
  </tr>
    );
  }
}