import React, { Component } from "react";
export default class Count extends Component {
  /*
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }*/

  increment = () => {
    const { value } = this.selectedNumber;
    this.props.increment(value * 1);
  };

  decrement = () => {
    const { value } = this.selectedNumber;
    this.props.decrement(value * 1);
  };

  oddIncrement = () => {
    const { value } = this.selectedNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };

  asyncIncrement = () => {
    const { value } = this.selectedNumber;
    this.props.incrementAsync(value * 1, 1000);
  };

  render() {
    return (
      <div>
        <h1>Component UI </h1>
        <h1>Current total: {this.props.count}</h1>
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
