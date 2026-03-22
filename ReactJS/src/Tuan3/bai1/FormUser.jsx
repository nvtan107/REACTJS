import React, { useState } from "react";

function FormUser() {
  const [userIn4, setUserIn4] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserIn4({ ...userIn4, [name]: value });
  };
  return (
    <div>
      <h2>State Object</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="">Tên: </label>
          <input
            type="text"
            name="name"
            value={userIn4.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="text"
            name="email"
            value={userIn4.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Tuổi: </label>
          <input
            type="text"
            name="age"
            value={userIn4.age}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default FormUser;
