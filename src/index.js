import React from "react";
import ReactDOM from "react-dom";

import TodoContextProvider, { TodoContext } from "./TodoContext";
import AddToDo from "./AddToDo";
import TodoList from "./TodoList";

import "./styles.css";

class App extends React.Component {
  static contextType = TodoContext;

  render() {
    // console.info(`context`, this.context);

    return (
      <div>
        <label>
          Enter a todo:
          <AddToDo />
        </label>
        <section>
          <h2>To do...</h2>
          <TodoList />
        </section>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  rootElement
);
