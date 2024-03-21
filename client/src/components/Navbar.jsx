import React from "react";

import { FaCartPlus } from "react-icons/fa6";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navbar w-full h-[5vw] bg-slate-900 text-white flex items-center justify-between px-20">
        <div className="flex w-max h-max items-center justify-center">
          <img
            className="w-[50px]"
            src="https://clipart-library.com/images_k/shopping-transparent-background/shopping-transparent-background-7.png"
            alt=""
          />
          <h2 className="font-bold text-3xl">e-Com</h2>
        </div>

        <ul class="flex gap-20 text-base">
          <Link to="/">
            <li class="hover:text-yellow-300 cursor-pointer">Home</li>
          </Link>

          <Link to="/mens">
            <li class="hover:text-yellow-300 cursor-pointer">Man</li>
          </Link>

          <Link to="/womens">
            <li class="hover:text-yellow-300 cursor-pointer">Women</li>
          </Link>

          <Link to="/kids">
            <li class="hover:text-yellow-300 cursor-pointer">Kids</li>
          </Link>
        </ul>

        <div className="flex gap-8 h-10 items-center">
          <Link to="/login">
            <button className="w-32 py-2 rounded-lg bg-gray-400 text-black font-semibold hover:bg-gray-300">
              Login
            </button>
          </Link>
          <div className="text-3xl cursor-pointer">
            <Link to="/cart">
              <FaCartPlus />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
