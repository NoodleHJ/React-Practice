import React, { Component } from "react";
// import "./index.css";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
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
