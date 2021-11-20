import React from "react";
import "./index.css";
import Header from "../../components/Header";
import List from "../../components/List";
import Footer from "../../components/Footer";
import PropTypes from "prop-types";

export default class Task extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    done: PropTypes.bool
  };

  state = {
    todos: [
      {
        id: "001",
        name: "eact",
        done: true
      },
      {
        id: "002",
        name: "sleep",
        done: false
      }
    ]
  };

  addTodo = (newTodo) => {
    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  updateTodo = (id, done) => {
    console.log(id, done);
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if (item.id === id) return { ...item, done: done };
      else return item;
    });
    this.setState({
      todos: newTodos
    });
  };

  deleteTodos = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => item.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  checkAllTodos = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      return { ...item, done: done };
    });
    this.setState({
      todos: newTodos
    });
  };

  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((item) => item.done === false);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    const { todos } = this.state;
    console.log("render", todos);
    return (
      <>
        <Header addTodo={this.addTodo}></Header>
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodos={this.deleteTodos}
        />
        <Footer
          todos={todos}
          checkAllTodos={this.checkAllTodos}
          clearAllDone={this.clearAllDone}
        />
      </>
    );
  }
}
