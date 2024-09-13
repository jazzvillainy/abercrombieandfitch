import React from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { SearchContext } from "../../context/SearchBarContext";
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CartList } from "../../context/CartItemContext";

function NavigatorHeader({ handleSideBar }) {
  const { setIsShow } = useContext(MyContext);
  const { setShowSearchBar } = useContext(SearchContext);
  const { cartItems } = useContext(CartList);

  return (
    <>
      <div className="flex items-center justify-around h-20 w-full bg-[#242424] z-50 top-0 max-md:fixed ">
        <button
          className=" absolute left-0 md:hidden rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500"
          onClick={handleSideBar}
        >
          menu
        </button>
        <div className=" max-md:hidden">
          <NavLink to="/" className="text-white">
            <button className=" rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800">
              Abercrombie & Fitch
            </button>
          </NavLink>
        </div>

        <div className="flex gap-[10px] max-md:hidden">
          <NavLink
            className="focus-within:border-b focus-within:border-white focus-within:pb-7"
            to="men"
          >
            Men's
          </NavLink>
          <NavLink
            className="focus-within:border-b focus-within:border-white focus-within:pb-7"
            to="womens"
          >
            Women's
          </NavLink>
          <NavLink
            className="focus-within:border-b focus-within:border-white focus-within:pb-7"
            to="electronics"
          >
            Electronics
          </NavLink>
          <NavLink
            className="focus-within:border-b focus-within:border-white focus-within:pb-7"
            to="jewelry"
          >
            Jewelries
          </NavLink>
        </div>

        <div className="flex gap-[10px]">
          <button
            className="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500"
          >
            <FaHeart />
          </button>
          <button
            className="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500"
            onClick={() => {
              setShowSearchBar(true);
            }}
          >
            <FaSearch />
          </button>
          <button
            className="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500"
            onClick={() => {
              setIsShow(true);
            }}
          >
            <FaCartShopping /> {cartItems.lenght}
          </button>
        </div>
      </div>
    </>
  );
}

export default NavigatorHeader;
