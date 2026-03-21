import React from "react";

function StudentInfo({ hoten, mssv, lop }) {
  return (
    <div>
      <h3>Thông tin cá nhân</h3>
      <p>Họ và tên: {hoten}</p>
      <p>MSSV: {mssv}</p>
      <p>Lớp: {lop}</p>
    </div>
  );
}

export default StudentInfo;
