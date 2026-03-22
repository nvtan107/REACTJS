import React, { useEffect, useState } from "react";

function UserID() {
  const [users, setUsers] = useState(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!value || value < 1 || value > 10) {
      setUsers(null);
      return;
    }
    const fetchUsers = async () => {
      setError("");
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${value}`,
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setUsers(null);
        console.log("Loi");
      }
    };
    fetchUsers();
  }, [value]);
  return (
    <div>
      <h3>Danh sach user</h3>
      <input
        type="number"
        name=""
        id=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>Tên: {users?.name}</div>
      <div>Email: {users?.email}</div>
    </div>
  );
}

export default UserID;
