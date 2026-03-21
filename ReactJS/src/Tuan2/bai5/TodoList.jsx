import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return (
      <div>
        <p>Chưa có công việc nào</p>
      </div>
    );
  }
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete}></TodoItem>
      ))}
    </div>
  );
}

export default TodoList;
