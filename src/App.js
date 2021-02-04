import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTodo: "",
      todos: [],
    };
  }

  inputChangeHandler = (e) => {
    this.setState({ inputTodo: e.target.value });
  };

  addItemsTodo = (e) => {
    e.preventDefault();
    const todos = this.state.todos.slice();
    if (this.state.inputTodo !== "" && this.state.inputTodo !== null) {
      todos.push(this.state.inputTodo);
    }
    this.setState({ inputTodo: "", todos: todos });
  };

  delTodo = (e) => {
    console.log(e.target.id);
    const todos = this.state.todos.slice();
    delete todos[e.target.id];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="container text-center">
        <h1 className="p-3">Your Todo List</h1>
        <TodoForm
          onChange={(e) => this.inputChangeHandler(e)}
          onSubmit={(e) => this.addItemsTodo(e)}
          inputVal={this.state.inputTodo}
        />

        <TodoList
          todosList={this.state.todos}
          onClick={(e) => this.delTodo(e)}
        />
      </div>
    );
  }
}

export default App;
