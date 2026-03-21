import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  function submit(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    onAdd(input);
    setInput("");
  }
  return (
    <div>
      <form action="" onSubmit={submit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
}

export default TodoInput;
