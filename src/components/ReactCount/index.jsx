import React, { Component } from "react";
import {
  createActionDecrement,
  createActionIncrement,
  createActionAsyncDecrement
} from "../../redux/count_action";
export default class Count extends Component {
  /*
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }*/

  increment = () => {
    const { value } = this.selectedNumber;
  };

  decrement = () => {
    const { value } = this.selectedNumber;
  };

  oddIncrement = () => {
    const { value } = this.selectedNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      console.log("odd", count);
    }
  };

  asyncIncrement = () => {
    const { value } = this.selectedNumber;
  };

  render() {
    return (
      <div>
        <h1>Current total: {store.getState()}</h1>
        <select ref={(c) => (this.selectedNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.oddIncrement}>Current odd sum +</button>&nbsp;
        <button onClick={this.asyncIncrement}>Async+</button>
      </div>
    );
  }
}
