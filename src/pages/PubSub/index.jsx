import React, { Component } from "react";
import Search from "./Search";
import List from "./List";

export default class PubSub extends Component {
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    );
  }
}
