import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      seterror(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Không thể fetch");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Loi");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <h2>Đang tải dữ liệu</h2>;
  if (error) return <h2>Không thể lấy, vui lòng thử lại</h2>;
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

export default UserList;
