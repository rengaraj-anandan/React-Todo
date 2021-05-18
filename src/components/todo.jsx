import React, { Component } from "react";
import nextId from "react-id-generator";
import Header from "./header";
import InputArea from "./inputArea";
import Task from "./task";
import Footer from "./footer";

class Todo extends Component {
  state = { tasks: [] };
  createTask = (name) => {
    if (!name) return;
    const state = { ...this.state };
    state.tasks.push({
      id: nextId(),
      name,
      isComplete: false,
    });
    this.setState(state);
  };
  deleteTask = (id) => {
    if (!id) return;
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };
  markComplete = (id) => {
    const tasks = this.state.tasks.map((task) => {
      if (task.id === id) task.isComplete = !task.isComplete;
      return task;
    });
    this.setState({ tasks });
  };
  render() {
    return (
      <div className="card bg-warning text-dark">
        <div className="card-body">
          <Header />
          <InputArea createTask={this.createTask} />
          <ul className="list-group">
            {this.state.tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                markComplete={this.markComplete}
                onDelete={this.deleteTask}
              />
            ))}
          </ul>
          <Footer tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default Todo;
