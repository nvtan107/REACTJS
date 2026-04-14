import React, { useReducer } from "react";

const initialState = {
  status: "idle",
  data: [],
  error: null,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { status: "loading", data: [], error: null };
    case "FETCH_SUCCESS":
      return { status: "success", data: action.payload, error: null };
    case "FETCH_ERROR":
      return { status: "error", data: [], error: action.payload };
    default:
      return state;
  }
};

const FetchUsers = () => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async (shouldFail = false) => {
    dispatch({ type: "FETCH_START" });

    try {
      const url = shouldFail
        ? "https://jsonplaceholder.typicode.com/invalid-endpoint"
        : "https://jsonplaceholder.typicode.com/users";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Lỗi: ${response.status} - Không thể tải dữ liệu`);
      }

      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#333" }}>Fetch Users State Machine</h2>

      <div style={contentBoxStyle}>
        {state.status === "idle" && (
          <div style={statusWrapper}>
            <p>
              Trạng thái: <strong>Chờ lệnh (Idle)</strong>
            </p>
            <button
              onClick={() => fetchData(false)}
              style={btnStyle("#007bff")}
            >
              Tải dữ liệu thành công
            </button>
            <button onClick={() => fetchData(true)} style={btnStyle("#6c757d")}>
              Tải thử lỗi
            </button>
          </div>
        )}

        {state.status === "loading" && (
          <div style={statusWrapper}>
            <div className="spinner" style={spinnerStyle}></div>
            <p>Đang tải dữ liệu...</p>
          </div>
        )}

        {state.status === "error" && (
          <div style={{ ...statusWrapper, color: "#d32f2f" }}>
            <p>
              <strong>Lỗi:</strong> {state.error}
            </p>
            <button
              onClick={() => fetchData(false)}
              style={btnStyle("#f44336")}
            >
              Thử lại (Retry)
            </button>
          </div>
        )}

        {state.status === "success" && (
          <div style={statusWrapper}>
            <p style={{ color: "#2e7d32", fontWeight: "bold" }}>
              Tải dữ liệu thành công!
            </p>
            <ul style={listStyle}>
              {state.data.map((user) => (
                <li key={user.id} style={itemStyle}>
                  {user.name} - <small>{user.email}</small>
                </li>
              ))}
            </ul>
            <button
              onClick={() => fetchData(false)}
              style={btnStyle("#4caf50")}
            >
              Làm mới
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const containerStyle = {
  fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  maxWidth: "600px",
  margin: "40px auto",
  textAlign: "center",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
};

const contentBoxStyle = {
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const statusWrapper = {
  width: "100%",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  textAlign: "left",
  margin: "20px 0",
};

const itemStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
  fontSize: "14px",
};

const btnStyle = (color) => ({
  backgroundColor: color,
  color: "white",
  border: "none",
  padding: "10px 20px",
  margin: "5px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "opacity 0.2s",
});

const spinnerStyle = {
  width: "30px",
  height: "30px",
  border: "4px solid #f3f3f3",
  borderTop: "4px solid #3498db",
  borderRadius: "50%",
  margin: "0 auto 10px",
  animation: "spin 1s linear infinite",
};

export default FetchUsers;
