import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import { Link } from "react-router-dom";

function Category(props) {
  const { allProducts } = useContext(ShopContext);
  const filteredProducts = allProducts.filter(
    (item) => item.category === props.category
  );

  return (
    <div className="shop-category w-full">
      <img className="w-full h-[50vh]" src={props.banner} alt="" />
      <div className="shopCategory-products bg-gradient-to-tr from-green-400 to-purple-500">
        <ul className="flex flex-wrap gap-8 w-full h-full items-start justify-center p-20">
          {filteredProducts.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer bg-cyan-100 p-5 rounded-xl bg-opacity-20 hover:bg-green-100"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  className="w-[18vw] h-[40vh] rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
              </Link>
              <p className="font-bold w-[15vw]">{item.title}</p>
              <p className="text-[20px]">{item.price}</p>
              <p className="text-[13px]">{item.discount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
