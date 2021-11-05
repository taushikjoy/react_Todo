import React from "react";

function Todo({ text, todos, setTodos, todo }) {
  let deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className="todo-div">
      <li className="todo-li"> {text}</li>

      <button className="com-btn">
        <i className="fas fa-check"> </i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"> </i>
      </button>
    </div>
  );
}

export default Todo;
