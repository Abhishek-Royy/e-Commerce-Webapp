import React, { useContext } from "react";
import { ShopContext } from "../context/Context";

import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function Cart() {
  const { allProducts, cartItem, removeFromCart, addToCart } =
    useContext(ShopContext);

  return (
    <>
      <div className="main w-full min-h-[90vh] bg-gradient-to-tr from-green-300 to-cyan-100 flex items-center justify-start px-20">
        <div className="main-2 bg-gray-400 rounded-2xl bg-opacity-25 p-10 w-[55%] my-3">
          {allProducts.map((e) => {
            if (cartItem[e.id] > 0) {
              return (
                <>
                  <div className="flex gap-5">
                    <div>
                      <img className="w-[12vw] h-[25vh]" src={e.image} alt="" />
                    </div>
                    <div className="my-5">
                      <p className="text-2xl font-semibold">{e.title}</p>
                      <p className="text-2xl">{e.price}</p>
                      <p className="font-semibold">
                        Total Price: {e.price.slice(1) * cartItem[e.id]}
                      </p>
                    </div>
                  </div>
                  <div className="add-remove flex w-[200px] h-[4vw] gap-4 items-center justify-start mt-3">
                    <div
                      className=" w-[40px] h-[40px] flex items-center justify-center text-xl hover:cursor-pointer rounded-full bg-yellow-400 "
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    >
                      <IoIosRemoveCircleOutline />
                    </div>
                    <button className=" w-[40px] h-[40px] flex items-center justify-center text-xl hover:cursor-pointer rounded-2xl bg-yellow-400">
                      {cartItem[e.id]}
                    </button>
                    <div
                      className=" w-[40px] h-[40px] flex items-center justify-center text-xl hover:cursor-pointer rounded-full bg-yellow-400 "
                      onClick={() => {
                        addToCart(e.id);
                      }}
                    >
                      <IoMdAddCircleOutline />
                    </div>
                  </div>
                  <div className="w-full h-[2px] bg-black my-5"></div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
