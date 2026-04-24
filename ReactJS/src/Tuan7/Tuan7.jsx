import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./bai2/ThemeContext";
import ThemeButton from "./bai2/ThemeButton";
import { CountProvider } from "./bai1/CountContext";
import ComponentA from "./bai1/ComponentA";
import ComponentB from "./bai1/ComponentB";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  const containerStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "40px",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1>Quản lý Global State</h1>

      <div style={{ marginBottom: "20px" }}>
        <ThemeButton />
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#ccc",
          opacity: 0.3,
        }}
      ></div>

      <ComponentA />
      <ComponentB />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <AppContent />
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;
