import React from 'react'
import { NavLink } from 'react-router-dom';

function ImageApiComp() {
  return (
    <div className="relative w-full h-80 sm:h-auto flex justify-center">
      <img
        className="w-full h-full object-cover"
        src={
          "https://img.abercrombie.com/is/image/anf/ANF-2024-AUGWK3-YPB-SITE-HOMEPAGE.jpg"
        }
        alt=""
      />
      <div className="absolute bottom-4 left-4 sm:bottom-20 w-fit h-fit p-4 sm:p-10">
        <p className="max-lg:hidden bg-opacity-50 z-50 p-4 border border-transparent text-sm font-medium text-white bg-black">
          AN ACTIVE BRAND BY ABERCROMBIE.
        </p>
        <span className="flex gap-4 sm:gap-9 mt-2 sm:mt-0">
          <NavLink to="/men's">
            <button
              className=" bg-opacity-50 z-50 p-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            >
              SHOP MEN'S
            </button>
          </NavLink>
          <NavLink to="/women's">
            <button
              className="bg-opacity-50 z-50 p-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
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