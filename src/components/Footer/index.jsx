import React, { Component } from "react";

export default class Footer extends Component {
  handleCheck = (e) => {
    this.props.checkAllTodos(e.target.checked);
  };

  handleAllChecked = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;

    console.log("footer", todos);

    const doneCount = todos.reduce((p, c) => p + (c.done ? 1 : 0), 0);

    const total = todos.length;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.handleCheck}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部 {total}
        </span>
        <button className="btn btn-danger" onClick={this.handleAllChecked}>
          clear finished tasks
        </button>
      </div>
    );
  }
}
