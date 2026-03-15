import React from "react";
import "./Button.css";

function Button({ type, children }) {
  const dynamicClassName = `my-btn btn-${type}`;
  return <button className={dynamicClassName}>{children}</button>;
}
export default Button;
