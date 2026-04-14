import React, { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API_URL}?_limit=5`);
      if (!response.ok) throw new Error("Lỗi khi tải danh sách Todo");
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodoData = {
      title: inputValue,
      completed: false,
      userId: 1,
    };

    const tempId = Date.now();
    const optimisticTodo = { ...newTodoData, id: tempId };
    const previousTodos = [...todos];

    setTodos([...todos, optimisticTodo]);
    setInputValue("");
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newTodoData),
      });

      if (!response.ok) throw new Error("Lỗi: Không thể thêm Todo");

      const realTodo = await response.json();

      setTodos((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === tempId ? { ...todo, id: realTodo.id } : todo,
        ),
      );
    } catch (err) {
      setTodos(previousTodos);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteTodo = async (id) => {
    const previousTodos = [...todos];

    setTodos(todos.filter((todo) => todo.id !== id));
    setError(null);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Lỗi: Không thể xóa Todo");
    } catch (err) {
      setTodos(previousTodos);
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>📋 Quản lý Todo (Optimistic UI)</h2>

      {error && <div>{error}</div>}

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Thêm công việc mới..."
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting || !inputValue.trim()}>
          {isSubmitting ? "Đang thêm..." : "Thêm"}
        </button>
      </form>

      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Xóa</button>
            </li>
          ))}
          {todos.length === 0 && <p>Chưa có công việc nào.</p>}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
