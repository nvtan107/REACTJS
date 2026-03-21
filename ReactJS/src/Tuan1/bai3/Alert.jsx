import React from "react";
import "./Alert.css";

function Alert({ type, message, onClose }) {
  if (!type) return null;
  const alertClass = `alert-box alert-${type}`;
  return (
    <div className={alertClass}>
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}
export default Alert;
