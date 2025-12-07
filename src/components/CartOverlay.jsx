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

function CartOverlay({ setCartIsShowing }) {
  const { setIsShow } = useContext(MyContext);
  const { cartId } = useContext(CartId);
  const { totalPrice, setTotalPrice } = useContext(Total);
  const { cartItems, setCartItems } = useContext(CartList);

  // const [qty, setQTy] = useState(1);
  // const { IsLoading, error, eachItem } = useFetch(
  //   "https://fakestoreapi.com/products/",
  //   "posts"
  // );
  console.log(cartItems);

  const handleClick = (item) => {
    //delete cart item function
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
  useState(() => {
    setTotalPrice(Number(totalPrice.toFixed(2)));
  }, [totalPrice]);

  return (
    <div className="overlayTransparent z-auto relative min-h-[100dvh]">
      <div className="bg-white h-[100%] w-full md:w-3/4 right-0 absolute ">
        <div className="h-fit py-4 bg-[#242424] text-white flex justify-between items-center pl-5">
          <p>Shopping Bag {cartItems.length} items</p>
          <button
            className=" bg-opacity-50 z-50  border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500 w-7 h-7 fixed right-0 top-0 rounded-[100%]"
            onClick={() => setIsShow(false)}
          >
            x
          </button>
        </div>
        <ul className="h-full pb-80 gap-5 flex w-full gap-y-8 flex-col overflow-y-scroll p-10">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex h-fit w-full shadow-xl p-5 bg-white gap-5  min-w-40dvh hover:bg-stone-100 border rounded-lg"
            >
              <div className="h-[8rem] w-[8rem]">
                <img className="h-full w-full" src={item.image} alt="" />
              </div>
              <div className="h-full flex flex-col justify-between w-3/5">
                <p className="">
                  <b>
                    {item.title.length > 40
                      ? item.title.slice(0, 40) + "..."
                      : item.title}
                  </b>
                </p>
                <p className="text-sm ">{item.category}</p>
                <p>${item.price}</p>
                <span className="">
                  <Button
                    onClick={() => {
                      handleClick(item);
                    }}
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </span>
              </div>

              {/* <button onClick={() => incrementItemQuantity(item.id)}>+</button>

              <button onClick={() => decrementItemQuantity(item.id)}>-</button> */}
              {/* <span>{item.quantity}</span> */}
            </li>
          ))}
        </ul>
        <div className="flex absolute bottom-0 right-0 left-0 bg-[#242424] justify-between px-10 items-center">
          <div className="bg-stone-700 h-11 p-2 text-white w-fit ">
            Total: ${totalPrice}
          </div>

          <NavLink to="checkout">
            <button
              className="items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
  focus:ring-indigo-500 w-fit"
              onClick={() => setIsShow(false)}
            >
              Shopping Bag
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartOverlay;
