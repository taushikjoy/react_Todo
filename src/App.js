import React, { useState, useEffect } from "react";

import "./App.css";
import Form from "./components/Form";

import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredtodos, setFilteredtodos] = useState([]);

  useEffect(() => {
    filteredHandler();
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredtodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredtodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredtodos(todos);
    }
  };

  return (
    <>
      <header>
        <h1>Joy's To-Do list </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      {
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredtodos={filteredtodos}
        />
      }
    </>
  );
}
export default App;
