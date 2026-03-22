import React, { useEffect, useState } from "react";

function Bai1() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Loi");
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h3>Danh sach user</h3>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bai1;
