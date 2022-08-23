import React, { Component } from "react";
import { TodoContext } from "./TodoContext";

class AddTodo extends Component {
  static contextType = TodoContext;

  render() {
    const { handleInputChange } = this.context;
    // console.info(`AddTodo, context`, this.context);

    return (
      <form>
        <input onChange={handleInputChange} />
      </form>
    );
  }
}

export default AddTodo;
