import React, { Component } from 'react'
export class TaskCreator extends Component {
  constructor(props) {
    super();
    this.state = { NewTaskName: "" };
    this.updateNewTaskValue = this.updateNewTaskValue.bind(this);
    this.createNewTask = this.createNewTask.bind(this);
  }
  updateNewTaskValue(event) {
    this.setState({
      NewTaskName: event.target.value.trim()
    });
  }
  createNewTask() {
    this.state.NewTaskName && this.props.callback(this.state.NewTaskName);
    this.setState({
      NewTaskName: ''
    });
  }
  render() {
    return (
      <div className="my-1">
        <input
          type="text"
          className="form-control"
          value={this.state.NewTaskName}
          onChange={this.updateNewTaskValue}
        />
        <button className="btn btn-primary mt-1" onClick={this.createNewTask}>
          Add
      </button>
      </div>
    );
  }
}