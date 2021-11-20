import React, { Component } from "react";
import store from "../../redux/store";
import {
  decrement,
  incrementAsync,
  increment
} from "../../redux/actions/count_action";
export default class Count extends Component {
  /*
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }*/

  increment = () => {
    const { value } = this.selectedNumber;
    store.dispatch(increment(value * 1));
  };

  decrement = () => {
    const { value } = this.selectedNumber;
    store.dispatch(decrement(value * 1));
  };

  oddIncrement = () => {
    const { value } = this.selectedNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      console.log("odd", count);
      store.dispatch(increment(value * 1));
    }
  };

  asyncIncrement = () => {
    const { value } = this.selectedNumber;
    store.dispatch(incrementAsync(value * 1, 1000));
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
