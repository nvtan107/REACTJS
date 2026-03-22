import React, { useEffect, useMemo, useState } from "react";
const generate = () => {
  const products = [];
  for (let i = 1; i < 5000; i++) {
    products.push({
      id: i,
      name: `San pham ${i}`,
      price: Math.floor(Math.random() * 1000) + 10,
    });
  }
  return products;
};
const DATA = generate();
function Bai3() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [count, setCount] = useState(0);

  const startTime = performance.now();

  const filtererdProducts = useMemo(() => {
    console.log("--- Đang tính toán lọc dữ liệu ---");
    return DATA.filter((p) => {
      return (
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price <= maxPrice
      );
    });
  }, [search, maxPrice]);

  const totalPrice = useMemo(() => {
    return filtererdProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filtererdProducts]);

  const endTime = performance.now();
  console.log(`Thoi gian xu ly: ${(endTime - startTime).toFixed(4)} ms`);

  return (
    <div>
      <h3>Sản phẩm</h3>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <label htmlFor="">Giá tối đa: {maxPrice}</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <h3>Tổng tiền: ${totalPrice}</h3>
        <div>
          {filtererdProducts.slice(0, 100).map((p) => (
            <div key={p.id}>
              {p.name} - {p.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bai3;
