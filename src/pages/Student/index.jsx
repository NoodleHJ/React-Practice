import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  getStudentData = () => {
    axios.get("https://random-data-api.com/api/address/random_address").then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>get Data</button>
      </div>
    );
  }
}
