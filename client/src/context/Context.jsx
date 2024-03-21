// import React, { createContext, useState } from "react";
// import { allProducts } from "../api/product";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < allProducts.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItem, setcartItem] = useState(getDefaultCart());

//   const addToCart = () => {
//     setcartItem((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
//     console.log(cartItem);
//   };

//   const removeFromCart = () => {
//     setcartItem((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
//   };

//   console.log(cartItem);

//   const contextValue = { allProducts, cartItem, addToCart, removeFromCart };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React, { createContext, useState } from "react";
import { allProducts } from "../api/product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const product of allProducts) {
    cart[product.id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (productId) => {
    setCartItem((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
    console.log(cartItem);
  };

  const removeFromCart = (productId) => {
    if (cartItem[productId] > 0) {
      setCartItem((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
    }
  };

  console.log(cartItem);

  const contextValue = { allProducts, cartItem, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
