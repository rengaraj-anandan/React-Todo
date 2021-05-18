import React, { Component } from "react";

class InputArea extends Component {
  state = { name: "" };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  createTask = () => {
    this.props.createTask(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Please enter the task name"
          aria-label="Please enter the task name"
          aria-describedby="button-addon2"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-outline-dark"
          type="button"
          id="button-addon2"
          onClick={this.createTask}
        >
          Add
        </button>
      </div>
    );
  }
}

export default InputArea;
