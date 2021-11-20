import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="please enter the task name, add enter"
          onKeyUp={(e) => {
            if (e.keyCode !== 13) return;

            if (e.target.value.trim() === "") {
              alert("input cannot be empty");
              return;
            }

            const todo = {
              id: nanoid(),
              name: e.target.value,
              done: false
            };

            e.target.value = "";
            return this.props.addTodo(todo);
          }}
        />
      </div>
    );
  }
}
