import React, { Component } from "react";

export const TodoContext = React.createContext();

export default class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "", todoList: [] };
  }

  handleInputChange = (event) => {
    const { value: todo } = event.target;
    console.info(`handleInputChange todo`, todo);
    this.setState({ todo });
    this.setState((state) => ({
      todo: "",
      todoList: state.todo
    }));
  };

  // addTodo = event => {
  //   event.preventDefault();
  //   this.setState(state => ({
  //     todo: "",
  //     todoList: [...state.todoList, state.todo]
  //   }));
  // };

  render() {
    const { handleInputChange } = this;

    return (
      <TodoContext.Provider value={{ ...this.state, handleInputChange }}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
