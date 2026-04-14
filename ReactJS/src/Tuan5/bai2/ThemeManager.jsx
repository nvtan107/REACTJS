import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Chuyển sang giao diện {theme === "light" ? "Tối (Dark)" : "Sáng (Light)"}
    </button>
  );
};

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Component: Page (Cấp 3)</h3>
      <p>
        Trạng thái theme hiện tại đang là: <strong>{theme}</strong>
      </p>
      <Button />
    </div>
  );
};

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  const layoutStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <div style={layoutStyle}>
      <h2>Component: Layout (Cấp 2)</h2>
      <Page />
    </div>
  );
};

const ThemeManager = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default ThemeManager;
