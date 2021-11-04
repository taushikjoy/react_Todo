import React from "react";

function Todo(props) {
  return (
    <div className="todo-div">
      <li className="todo-li"></li>

      <button className="com-btn">
        <i class="fas fa-check"> </i>
      </button>
      <button className="trash-btn">
        <i class="fas fa-trash"> </i>
      </button>
    </div>
  );
}

export default Todo;
