import React from "react";
import "./ProductList.css";

import ProductCard from "../bai1/ProductCard";

function ProductList() {
  return (
    <div className="product-list-container">
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductList;
