import React from "react";

function Todo(props) {
  return (
    <div className="todo-div">
      <li className="todo-li"> {props.text}</li>

      <button className="com-btn">
        <i className="fas fa-check"> </i>
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"> </i>
      </button>
    </div>
  );
}

export default Todo;
