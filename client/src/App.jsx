import React from "react";

import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Registration from "./pages/Registration";

import Footer from "./components/Footer";

import men_banner from "./assets/men_banner.jpg";
import women_banner from "./assets/women_banner.jpg";
import kid_banner from "./assets/kid_banner.jpg";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<Category banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Category banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Category banner={kid_banner} category="kid" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
