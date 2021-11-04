import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <div className="container">
      <ul className="todo-list">
        {todos.map((hhhh) => (
          <Todo />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
