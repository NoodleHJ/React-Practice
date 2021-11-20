import React, { Component } from "react";

export default class Item extends Component {
  state = {
    mouse: false
  };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked);
    };
  };

  handleDelete = (id) => {
    if (window.confirm("really to delete?")) {
      this.props.deleteTodos(id);
    }
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "gray" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={() => this.handleDelete(id)}
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          delete
        </button>
      </li>
    );
  }
}
