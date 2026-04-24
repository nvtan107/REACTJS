import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={styles.button}>
      Chế độ: {theme === "light" ? "Sáng" : "Tối"}
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontWeight: "bold",
  },
};

export default ThemeButton;
