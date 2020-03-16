
import React, { Component } from 'react'
export class VisibilityControl extends Component{
  constructor(props){
    super();
  }
  getTotalTask(){
    return this.props.taskItems.filter(t => !t.done).length;
  }
  render(){
    return (
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={this.props.isChecked}
          onChange={ e => this.props.callback(e.target.checked)}
        />
        <label htmlFor="form-check-label">
          Show { this.props.description }
        </label>
      </div>
    );
  }
}