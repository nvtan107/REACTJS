import React, { useContext } from "react";
import { CountContext } from "./CountContext";

const ComponentB = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff3e0",
        borderRadius: "8px",
        marginTop: "15px",
        color: "black",
      }}
    >
      <h2>Component B (Điều khiển)</h2>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => setCount(count + 1)} style={styles.btn}>
          Tăng (+1)
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ ...styles.btn, backgroundColor: "#f44336" }}
        >
          Giảm (-1)
        </button>
      </div>
    </div>
  );
};

const styles = {
  btn: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ComponentB;
