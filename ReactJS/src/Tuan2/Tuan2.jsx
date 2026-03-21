import React from "react";
import Header from "./bai1/Header";
import Footer from "./bai1/Footer";
import StudentInfo from "./bai1/StudentInfo";
import Count from "./bai2/Count";
import Bai3 from "./bai3/Bai3";
import Bai4 from "./bai4/Bai4";
import Bai5 from "./bai5/bai5";
function Tuan2() {
  return (
    <div>
      <h1>Bài 1</h1>
      <Header> </Header>
      <StudentInfo
        hoten="Nguyen Van Tan"
        mssv="23707391"
        lop="19B"
      ></StudentInfo>
      <Footer></Footer>
      <h1>Bài 2</h1>
      <Count></Count>
      <h1>Bài 3</h1>
      <Bai3></Bai3>
      <h1>Bài 4</h1>
      <Bai4></Bai4>
      <h1>Bài 5</h1>
      <Bai5></Bai5>
    </div>
  );
}

export default Tuan2;
