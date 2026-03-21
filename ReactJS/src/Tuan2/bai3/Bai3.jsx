import React, { useState } from "react";

function Bai3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <form action="" className="login-form">
        <div className="form-group">
          <label htmlFor="">Tên</label>
          <input
            className="form-input"
            type="text"
            placeholder="Nhập tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            className="form-input"
            type="text"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
      <div>
        <p>Thông tin đã nhập</p>
        <p>Tên: {name}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default Bai3;
