import React, { Component } from "react";
import axios from "axios";
import Pubsub from "pubsub-js";

export default class Search extends Component {
  search = () => {
    const {
      keywordElement: { value: keyWord }
    } = this;

    Pubsub.publish("search", { isFirst: false, isLoading: true });

    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        console.log(response.data);
        const results = response.data.items.map((item) => {
          return {
            id: item.id,
            avatar: item.avatar_url,
            html: item.html_url,
            name: item.login
          };
        });
        Pubsub.publish("search", {
          isLoading: false,
          users: results
        });
      },
      (error) => {
        console.log(error);
        Pubsub.publish("search", {
          err: error.message,
          isLoading: false
        });
      }
    );
  };

  render() {
    return (
      <section>
        <h3>Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keywordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />{" "}
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
