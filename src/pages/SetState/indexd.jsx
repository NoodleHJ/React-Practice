import { Component } from "react";
import CountContainer from "../../containers/Count";

export class SetState extends Component {
  state = {
    count: 0
  };

  add = () => {
    /*
    const { count } = this.state;
    this.setState({ count: count + 1 }, () => {
      console.log("update after render", this.state.count);
    });
    console.log("a", this.state.count);
    */
    this.setState((state, props) => {
      return {
        count: state.count + 1
      };
    });
  };
  render() {
    return (
      <>
        <h2> Sum: {this.state.count} </h2>
        <button onClick={this.add}> add </button>
      </>
    );
  }
}
