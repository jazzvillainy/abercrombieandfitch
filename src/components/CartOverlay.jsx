import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../context/Context";
import DataContext from "../layout/pages/Body";
import { CartId } from "../context/CartIdContext";
import { CartList } from "../context/CartItemContext";
import { Total } from "../context/CartTotalPrice";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useFetch from "../context/useFetch";
import { AddToCartContext } from "../context/AddToCartContext";

function CartOverlay({ handleClick3 }) {
  const { cartId } = useContext(CartId);
  const { totalPrice, setTotalPrice } = useContext(Total);
  const { cartItems, setCartItems } = useContext(CartList);

  // const [qty, setQTy] = useState(1);
  // const { IsLoading, error, itemData } = useFetch(
  //   "https://fakestoreapi.com/products/",
  //   "posts"
  // );

  const handleClick = (item) => {
    setCartItems(cartItems.filter((cartitem) => cartitem !== item));
    setTotalPrice(totalPrice - item.price);
  };

  const handleIncrement = (item) => {
    console.log(item);
    setCartItems((prevItems) => {
      prevItems.map((prevItem) => {
        prevItem.id === item.id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem;
      });
    });

    
    // cartItems.map((x) => {
    //   if (itemId === item.id) {
    //     setQTy(qty + 1)
    // setTotalPrice((t) => totalPrice + item.price * qty);
    // }
    // });
    // setCartItems([...cartItems]);
  };

  return (
    <div
      className="overlayTransparent z-auto relative min-h-[100dvh]"
      onClick={handleClick3}
    >
      <div className="bg-white h-[100%] sm:w-[70%] md:w-3/5  right-0 absolute">
        <div className="h-fit  bg-[#242424] text-white flex justify-between items-center">
          <p>Shopping Bag {cartItems.length} items</p>
          <button
            className="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
  focus:ring-indigo-500"
            onClick={() => {
              setIsShow(false);
            }}
            // onKeyDown={(e)=>{
            //   e.key === "Escape"? setIsShow(false):"";
            // }}
          >
            x
          </button>
        </div>
        <ul className="h-4/5 gap-5 flex w-full gap-y-8 flex-col overflow-y-scroll p-10">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex h-fit w-full p-5 bg-white gap-5  min-w-40dvh hover:bg-stone-100 border rounded-lg"
            >
              <div className="h-[8rem] w-[8rem]">
                <img className="h-full w-full" src={item.image} alt="" />
              </div>
              <div className="h-fit w-3/5">
                <p className="word-break: break-all">
                  <b>{item.title}</b>
                </p>
                <p className="text-sm ">{item.category}</p>
                <p>${item.price}</p>
                <Button
                  onClick={() => {
                    handleClick(item);
                  }}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </div>

              {/* <button onClick={() => incrementItemQuantity(item.id)}>+</button>

              <button onClick={() => decrementItemQuantity(item.id)}>-</button> */}
              {/* <span>{item.quantity}</span> */}
            </li>
          ))}
        </ul>
        <div className="bg-[#242424] h-11 text-white">Total: ${totalPrice}</div>
        <div className="bg-[#242424] h-1/5 text-white ">
          <NavLink to="checkout">
            <button
              className=" items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
  focus:ring-indigo-500"
            >
              View Shopping Bag
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartOverlay;
