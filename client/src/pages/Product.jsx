import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import { useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

import ProductDesc from "../components/ProductDesc";

function Product() {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((item) => item.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-details w-full min-h-screen">
      <div className="main w-full h-full flex bg-gradient-to-tr from-green-300 to-cyan-100">
        <div className="product-Image w-1/2 h-full p-20 flex items-center justify-center">
          <img className="rounded-xl" src={product.image} alt={product.title} />
        </div>

        <div className="product-data w-1/2 max-h-full flex items-start justify-center flex-col pr-20 gap-2 overflow-y-scroll">
          <h2 className="text-[50px] font-bold text-green-900 leading-tight">
            {product.title}
          </h2>
          <p className="text-lg font-medium">Category: {product.category}</p>

          <p className="text-xl font-medium">Price: {product.price}</p>
          <p className="text-lg font-medium text-red-600">
            Discount: {product.discount}
          </p>
          <div className="flex text-yellow-500 gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <label htmlFor="size" className="text-2xl font-medium">
              Select Size
            </label>
            <select
              name="size"
              id="size"
              className="w-[20vw] p-2 bg-opacity-20 bg-gray-400 rounded-2xl outline-none"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">Xll</option>
              <option value="XXL">Xll</option>
            </select>
          </div>
          <div className="w-full mt-5">
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="bg-yellow-400 w-[12vw] py-3 mr-10 rounded-full "
            >
              Add to cart
            </button>
            <button className="bg-yellow-400 w-[12vw] py-3  rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <ProductDesc />
    </div>
  );
}

export default Product;
