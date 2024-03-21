<!-- import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import { useParams } from "react-router-dom";

function Product(props) {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));

  return (
    <>
      <p>{props.product.category}</p>
      <p>{props.product.title}</p>
    </>
  );
}

export default Product; -->