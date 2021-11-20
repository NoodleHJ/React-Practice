import { Component } from "react";
import { Child } from "./Parent";

export class Pure extends Component {
  state = {
    car: "blue"
  };
  changeCar = () => {
    this.setState({
      car: "orange"
    });
  };
  render() {
    return (
      <div>
        <h1>Change Car</h1>
        <button onClick={this.changeCar}>change </button>
        <Child />
      </div>
    );
  }
}
