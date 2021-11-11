import React from "react";

function Form(props) {
  function inputTexthandler(e) {
    props.setInputText(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputText("");
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={props.inputText}
        onChange={inputTexthandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} type="submit" className="todo-button">
        <i className="fas fa-plus"></i>
      </button>

      <select
        onChange={statusHandler}
        name="todos"
        className="filter-todo"
        id=""
      >
        <option value="all">ALL</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

export default Form;
