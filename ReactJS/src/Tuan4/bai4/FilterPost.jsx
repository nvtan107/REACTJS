import React, { useEffect, useState } from "react";

function FilterPost() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  var url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    async function fetchData() {
      var res = await fetch(url);
      var data = await res.json();
      setData(data);
      setFilterData(data);
      console.log(data);
    }
    fetchData();
  }, []);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Fetch từ đường dẫn tương đối tính từ thư mục public
  //       const res = await fetch("/course.json");
  //       // Kiểm tra nếu fetch thành công
  //       if (!res.ok) throw new Error("Không thể tải file");

  //       const jsonData = await res.json(); // Không truyền tham số vào đây
  //       setData(jsonData);
  //       setFilterData(jsonData); // Hiển thị ban đầu
  //       console.log(jsonData);
  //     } catch (error) {
  //       console.error("Lỗi fetch:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  function handleSearch(e) {
    setSearchValue(e.target.value);
    var filter = data.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setFilterData(filter);
  }
  return (
    <div>
      <input type="text" value={searchValue} onChange={handleSearch} />
      {filterData.map((item) => (
        <div key={item.id}>
          <h3>
            {item.id}-{item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default FilterPost;
