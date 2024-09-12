import React from 'react'
import { NavLink } from 'react-router-dom';

function ImageApiComp() {
  return (
      <div className="relative h-auto flex justify-center sm:cover sm:h-fit">
        <img
          className="w-[100%]"
          src={
            "https://img.abercrombie.com/is/image/anf/ANF-2024-AUGWK3-YPB-SITE-HOMEPAGE.jpg"
          }
          alt=""
        />
        <div className="absolute bottom-0 w-fit h-fit left-0 p-10">
          <p className="">AN ACTIVE BRAND BY ABERCROMBIE.</p>
          <span className="flex gap-9">
            <NavLink to="/men">
              <button
                className=" bg-opacity-50 z-50 p-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500"
              >
                SHOP MEN'S
              </button>
            </NavLink>
            <NavLink to="womens">
              <button
                className="bg-opacity-50 z-50 p-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500"
              >
                SHOP WOMEN'S
              </button>
            </NavLink>
          </span>
        </div>
      </div>
  );
}

export default ImageApiComp