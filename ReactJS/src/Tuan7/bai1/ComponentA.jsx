import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const ComponentA = () => {
  const { count } = useContext(CountContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#e0f7fa",
        borderRadius: "8px",
        color: "black",
      }}
    >
      <h2>Component A (Hiển thị)</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Giá trị Count hiện tại: <span>{count}</span>
      </p>
    </div>
  );
};

export default ComponentA;
