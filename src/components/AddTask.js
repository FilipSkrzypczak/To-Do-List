import React, { Component } from "react";

class AddTask extends Component {
  counter = 0;

  state = {
    name: "",
    id: this.counter
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.length > 2) {
      this.props.add(this.state.name, this.state.id);
      this.counter++;
      localStorage.setItem("counter", JSON.stringify(this.counter));
      this.setState({
        name: "",
        id: this.counter
      });
    } else {
      alert("Input value is too short!");
    }
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("counter"))) {
      console.log("tak");
      this.counter = JSON.parse(localStorage.getItem("counter"));
      this.setState({
        id: this.counter
      });
    }
  }

  render() {
    return (
      <div className="add-task">
        <h2>~Add task~</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.name}
            type="text"
            name="taskName"
            onChange={this.handleChange}
          />
          <button>Add task</button>
        </form>
        <div className="info">
          Mark task as important - <i className="fas fa-star star"></i>
          <br />
          Delete task from list - <i className="fas fa-trash trash"></i>
        </div>
      </div>
    );
  }
}

export default AddTask;
