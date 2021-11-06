import React from "react";

function Todo({ text, todos, setTodos, todo }) {
  let deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  let completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-div">
      <li className={`todo-li ${todo.completed ? "completed" : ""}`}>{text}</li>

      <button onClick={completedHandler} className="com-btn">
        <i className="fas fa-check"> </i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"> </i>
      </button>
    </div>
  );
}

export default Todo;
