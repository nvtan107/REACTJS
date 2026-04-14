import React, { useState, useCallback } from "react";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Học React Performance", completed: false },
    { id: 2, text: "Làm bài tập memo", completed: false },
  ]);
  const [text, setText] = useState("");

  // Dùng useCallback để giữ nguyên tham chiếu hàm qua các lần render
  const onDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []); // Dependency rỗng vì dùng functional update (prev => ...)

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }, []);

  const handleAdd = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List Performance</h2>

      {/* Khi gõ vào đây, chỉ TodoApp render lại, TodoList không được render lại */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
