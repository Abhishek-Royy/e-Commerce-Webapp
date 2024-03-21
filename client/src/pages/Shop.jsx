import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";

import Contact from "../components/Contact";

function Shop() {
  const [item, setitem] = useState([]);

  const getData = async () => {};

  const getItem = async () => {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      console.log(data);
      setitem(data);
    } catch (error) {
      console.log("error in fetch", error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <div className="main w-full min-h-screen">
        <div className="container w-full h-[90vh] bg-gradient-to-t from-cyan-100 to-purple-400 flex item-center justify-center">
          <div className="box-1 w-[90%] h-[80%] bg-cyan-50 bg-opacity-20 rounded-2xl mt-16 flex items-center justify-center flex-col">
            <h1 className="text-7xl font-bold mb-4 animate-bounce text-green-900">
              India M♥st Popular Shoping Brand
            </h1>
            <div className="flex  relative right-20 ">
              <div>
                {[
                  "Get Upto 50% disscount",
                  "Summer sell is knocking the door",
                  "Goa Beach visit special dress on disscount",
                ].map((item, index) => {
                  return (
                    <h3 className="text-3xl text-red-500 m-4" key={index}>
                      {item}
                    </h3>
                  );
                })}
              </div>

              <img
                className="w-[20vw] absolute top-44"
                src="https://media4.giphy.com/media/OGIMN1ROXDPStIAwYM/giphy.gif?cid=6c09b9526mpi57h03qzvvcmkyg0n73ykg4erxd1px2gt43ef&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                alt=""
              />

              <img
                className="w-[30vw] relative left-[12vw] top-16"
                src="https://i.pinimg.com/originals/8f/80/f0/8f80f05c663e544b4d2a7e278582eb60.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="main-2 w-full h-screen flex bg-gradient-to-tr from-gray-100 to-cyan-400">
          <div className="left w-1/2 h-full  flex items-center justify-center flex-col">
            <img
              className="w-[42vw] animate-bounce"
              src="https://static.vecteezy.com/system/resources/previews/027/148/498/original/a-neatly-folded-t-shirt-ideally-placed-in-a-stack-of-other-folded-clothes-ai-generated-png.png"
              alt=""
            />
            <button className=" w-36 py-3 rounded-3xl bg-slate-700 text-white text-[18px] hover:bg-slate-600 ">
              Shop It
            </button>
          </div>
          <div className="right left w-1/2 h-full px-16 flex items-start justify-center flex-col ">
            <h1 className="text-5xl font-bold text-blue-800 mb-10">
              Shop Your favorite dresses on biggest discount
            </h1>
            <h1 className="text-2xl font-bold text-red-600">
              Smart brands don't just ride trend shifts.
            </h1>

            <img
              className="w-[28vw] animate-pulse"
              src="https://png.pngtree.com/png-clipart/20220918/original/pngtree-weekend-offer-mega-sale-png-image_8622833.png"
              alt=""
            />
          </div>
        </div>

        <div className="main-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-20  bg-gradient-to-tr from-gray-400 to-cyan-100 ">
          {item.map((item, index) => (
            <a key={index} href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-300 xl:aspect-h-8 xl:aspect-w-7 mt-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                ${item.price}
              </p>
              {item.rating.rate > 4 ? (
                <p className="mt-1 text-lg text-yellow-600 font-bold flex items-center gap-1">
                  {item.rating.rate}
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              ) : (
                <p className="mt-1 text-lg text-red-500 font-bold flex items-center gap-1">
                  {item.rating.rate}
                  <FaStar />
                  <FaStar />
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Shop;
