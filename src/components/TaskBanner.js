import React, { Component } from 'react'
export class TaskBanner extends Component{
  constructor(props){
    super();
  }
  getTotalTask(){
    return this.props.taskItems.filter(t => !t.done).length;
  }
  render(){
    return (
      <h4 className="bg-secondary  text-white text-center p-4">
      {this.props.userName}'s Tasks App ({this.getTotalTask()} tasks to do)
    </h4>
    )
  }
}