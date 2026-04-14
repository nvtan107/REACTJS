import React from "react";

const TodoItem = React.memo(({ todo, onDelete, onToggle }) => {
  console.log("render item", todo.id);

  return (
    <li>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Xoá</button>
    </li>
  );
});

export default TodoItem;
