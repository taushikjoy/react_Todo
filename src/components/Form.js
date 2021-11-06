import React from "react";

function Form(props) {
  function inputTexthandler(e) {
    props.setInputText(e.target.value);
    console.log(props.inputText);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputText("");
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

      <select name="todos" className="filter-todo" id="">
        <option value="all">ALL</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

export default Form;
