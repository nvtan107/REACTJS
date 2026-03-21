import React, { useState } from "react";
import "./Count.css";
function Count() {
  const [count, setCount] = useState(0);
  function Increase() {
    setCount(count + 1);
  }
  function Descrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function resert() {
    setCount(0);
  }
  return (
    <div>
      <h2>
        Đếm số: <p style={{ color: count > 10 ? "red" : "white" }}>{count}</p>
      </h2>
      <div className="groupbtn">
        <button className="btn-decrease" onClick={Descrease}>
          Trừ
        </button>
        <button className="btn-increase" onClick={Increase}>
          Cộng
        </button>
        <button className="btn-reset" onClick={resert}>
          Làm mới
        </button>
      </div>
    </div>
  );
}

export default Count;
