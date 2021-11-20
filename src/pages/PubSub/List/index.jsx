import React, { Component } from "react";
import "./index.css";
import PubSub from "pubsub-js";

export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: undefined
  };

  componentDidMount() {
    PubSub.subscribe("search", (_, stateObj) => {
      console.log("stateObj", stateObj);
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe("search");
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div>
        {isFirst ? (
          <h2> welcom</h2>
        ) : isLoading ? (
          <h2> Loading </h2>
        ) : err ? (
          <h2 style={{ color: "red" }}> {err} </h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a ref="noreferrer" href={user.html} target="_blank">
                  <img
                    alt="portrait"
                    src={user.avatar}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text"> {user.name} </p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
