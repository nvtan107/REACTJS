import React from "react";
import FormUser from "./bai1/FormUser";
import Clock from "./bai2/Clock";
import Bai3 from "./bai3/Bai3";
import TodoApp from "./bai4/TodoApp";
import Stopwatch from "./bai5/Stopwatch";
import Bai6 from "./bai6/FetchUsers";
import FetchUsers from "./bai6/FetchUsers";
Stopwatch;
Bai3;
Clock;
FormUser;
TodoApp;
FetchUsers;
function Tuan3() {
  return (
    <div>
      <h1>Bài 1</h1>
      <FormUser></FormUser>
      <h1>Bài 2</h1>
      <Clock></Clock>
      <h1>Bài 3</h1>
      <Bai3></Bai3>
      <h1>Bài 4</h1>
      <TodoApp></TodoApp>
      <h1>Bài 5</h1>
      <Stopwatch></Stopwatch>
      <h1>Bài 6</h1>
      <FetchUsers></FetchUsers>
    </div>
  );
}

export default Tuan3;
