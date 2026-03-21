import ProductCard from "./bai1/ProductCard";
import Button from "./bai2/Button";
import React, { useState } from "react";
import Alert from "./bai3/Alert";
import LoginForm from "./bai4/LoginForm";
import "../App.css";

function Tuan1() {
  const [alertType, setAlertType] = useState("");
  return (
    <div className="App">
      <h1>Bai tap 1</h1>
      <ProductCard />
      <h1>Bai tap 2</h1>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
      <h1>Bai tap 3</h1>
      <div className="App" style={{ padding: "30px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setAlertType("success")}>Hiện Success</button>
          <button onClick={() => setAlertType("warning")}>Hiện Warning</button>
          <button onClick={() => setAlertType("error")}>Hiện Error</button>
        </div>
        <Alert
          type={alertType}
          message={`Đây là thông báo loại: ${alertType.toUpperCase()}`}
          onClose={() => setAlertType("")}
        />
      </div>
      <h1>Bai tap 4</h1>
      <LoginForm></LoginForm>
    </div>
  );
}

export default Tuan1;
