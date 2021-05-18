import React, { Component } from "react";
import "fontawesome-4.7/css/font-awesome.css";

class Task extends Component {
  deleteTask = () => {
    this.props.onDelete(this.props.task.id);
  };
  markComplete = () => {
    this.props.markComplete(this.props.task.id);
  };
  render() {
    return (
      <li className="list-group-item border-dark bg-warning">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          onChange={this.markComplete}
        />
        {this.props.task.isComplete ? (
          <s>{this.props.task.name}</s>
        ) : (
          this.props.task.name
        )}
        <i className="fa fa-trash pull-right" onClick={this.deleteTask}></i>
      </li>
    );
  }
}

export default Task;
