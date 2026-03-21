import { useState } from "react";
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Bai5() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Bài 5" },
    { id: 2, text: "Văn Tân" },
  ]);
  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
    };
    setTodos([...todos, newTodo]);
  };
  const handleDelete = (id) => {
    const newTodos = todos.filter((todos) => todos.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <h2>Công việc</h2>
      <TodoInput onAdd={handleAdd}></TodoInput>
      <TodoList todos={todos} onDelete={handleDelete}></TodoList>
    </div>
  );
}

export default Bai5;
