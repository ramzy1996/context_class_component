import React, { Component } from "react";
import { TodoContext } from "./TodoContext";

class TodoList extends Component {
  static contextType = TodoContext;
  render() {
    const { todoList } = this.context;
    return (
      <ol>
        {/* {todoList.map(todo => ( */}
        <li>{todoList}</li>
        {/* ))} */}
      </ol>
    );
  }
}

export default TodoList;
