import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Xoá</button>
    </div>
  );
}

export default TodoItem;
