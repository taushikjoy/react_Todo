import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos, filteredtodos }) {
  return (
    <div className="container">
      <ul className="todo-list">
        {filteredtodos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
