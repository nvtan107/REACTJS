import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login-container">
      <form action="" className="login-form">
        <h2>Đăng nhập</h2>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            className="form-input"
            type="text"
            placeholder="Tên đăng nhập"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mật khẩu</label>
          <input
            className="form-input"
            type="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <button className="login-btn" type="submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
