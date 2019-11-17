import React, { Component } from "react";
import "../styles/App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    taskList: []
  };

  handleDelete = id => {
    const taskList = [...this.state.taskList];
    const index = taskList.findIndex(task => task.id === id);
    taskList.splice(index, 1);
    this.setState({
      taskList
    });
  };

  handleDone = id => {
    const taskList = [...this.state.taskList];
    taskList.forEach(task => {
      if (task.id === id) {
        task.done = true;
      }
    });
    this.setState({
      taskList
    });
  };

  handleImportant = id => {
    const taskList = [...this.state.taskList];
    taskList.forEach(task => {
      if (task.id === id && !task.done) {
        task.important = !task.important;
      }
    });
    this.setState({
      taskList
    });
  };

  addTask = (name, id) => {
    const task = {
      id: id,
      name: name,
      important: false,
      done: false
    };

    this.setState(prevState => ({
      taskList: [...prevState.taskList, task]
    }));
  };

  componentDidUpdate() {
    localStorage.setItem("taskList", JSON.stringify(this.state.taskList));
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("taskList"))) {
      this.setState({
        taskList: JSON.parse(localStorage.getItem("taskList"))
      });
    }
  }

  render() {
    return (
      <section id="task-section">
        <AddTask add={this.addTask} />
        <TaskList
          list={this.state.taskList}
          done={this.handleDone}
          important={this.handleImportant}
          delete={this.handleDelete}
        />
      </section>
    );
  }
}

export default App;
