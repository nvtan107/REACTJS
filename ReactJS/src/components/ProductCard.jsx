import React from "react";
import "./ProductCard.css";
import giayImg from "../assets/giay.webp";
function ProductCard() {
  return (
    <div>
      <img src={giayImg} className="card-img"></img>
      <h3>Giày thể thao</h3>
      <p className="price">1.999.999</p>
      <button className="btn">Add to cart</button>
    </div>
  );
}
export default ProductCard;
