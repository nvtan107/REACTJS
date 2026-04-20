import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetail;