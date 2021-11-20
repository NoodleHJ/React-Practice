import { Button } from "bootstrap";
import { nanoid } from "nanoid";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person_action";

class Person extends Component {
  addPerson = () => {
    const name = this.name.value;
    const age = this.age.value;
    const personObj = { id: nanoid(), name, age };
    console.log("person", personObj);
    this.props.addPerson(personObj);
  };
  render() {
    return (
      <>
        <h1>Person {this.props.count}</h1>
        <div>
          <input
            ref={(c) => (this.name = c)}
            type="text"
            placeholder="enter name"
          />
          <input
            ref={(c) => (this.age = c)}
            type="number"
            placeholder="enter age"
          />
          <button onClick={this.addPerson}>add</button>
        </div>
        <ul>
          {this.props.personList.map((item) => (
            <li key={item.id}>
              {item.name} + {item.age}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default connect(
  (state) => ({
    personList: state.person,
    count: state.count
  }),
  {
    addPerson
  }
)(Person);
