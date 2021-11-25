import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

export default class Github extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: undefined
  };

  updateState = (obj) => {
    this.setState(obj);
  };

  render() {
    return (
      <div>
        <Search updateState={this.updateState} />

        <List className="grid-container" {...this.state} />
      </div>
    );
  }
}
