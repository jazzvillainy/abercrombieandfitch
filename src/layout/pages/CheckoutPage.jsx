import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { CartList } from "../../context/CartItemContext";
import { backdropClasses, Backdrop } from "@mui/material";
import { circularProgressClasses, CircularProgress } from "@mui/material";
import useFetch from "../../context/useFetch";

function CheckoutPage() {
  const { cartItems, setCartItems } = useContext(CartList);
  const [checkOutState, setCheckOutState] = useState([]);
  const { IsLoading, error, eachItem } = useFetch(
    "https://fakestoreapi.com/products/",
    "posts"
  );
  // const [cartItemsState, setCartItemsState] = useState()

  const handleInc = (item) => {
    // incase you want to run a function first before you set the state, you use batching n=>n+1
    //it will run n+1 first before setting the state to the status quo
    setCartItems((prevItems) =>
      prevItems.map((x) =>
        x.id === item.id ? { ...item, qty: item.qty + 1 } : item
      )
    );
    console.log(cartItems);
  };

  const handleDec = (item) => {
    // setCartItems((prev) =>
    //   prev.map((x) => {
    //     //mapped element id === clicked item id
    //     return x.id === item.id ? { ...item, qty: item.qty - 1 } : item;
    //     // note that when usiing curly brace you have to say return
    //   })
    // );
    setCartItems((prev) => [
      ...prev.filter((x) => {
        //mapped element id === clicked item id
        return x.id !== item.id;
        // note that when usiing curly brace you have to say return
      }),
      { ...item, qty: item.qty - 1 },
    ]);
  };
  // const handleInc = (item) => {
  //   const updatedCart = cartItems.find((x) => x.id === item.id);
  //   if (updatedCart) {
  //     updatedCart.qty += 1; // Modify the found item directly
  //   }
  // };

  if (error) {
    return (
      <section className="bg-stone-100 text-center flex flex-col justify-center align-middle w- h-[100dvh]">
        <>
          <div className=" text-xl">
            <b>{(error.message = "Check your internet connection")}</b>
          </div>
          <div className="text-sm">Have another go?</div>
          <span className="mt-5">
            <button
              className="items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500"
            >
              Try again
            </button>
          </span>
        </>
      </section>
    );
  }

  return (
    <div className="bg-white">
      {IsLoading ? (
        <Backdrop
          sx={(theme) => ({
            color: "#fff",
            zIndex: theme.zIndex.drawer + 1,
            position: "relative",
            height: "100dvh",
          })}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <div className="p-4 bg-white scale-75 mx-auto py-10 max-md:p-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="p-4 rounded-md bg-white-700">
                <h3 className="text-lg font-bold">Order Summary</h3>
                <ul className="space-y-2 ">
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="shadow-xl transition duration-500 flex h-fit w-full p-5 bg-white gap-5  min-w-40dvh hover:bg-stone-100 border rounded-lg"
                    >
                      <div className="bg-white max-h-[8rem] max-w-[5rem]">
                        <img
                          className="h-full w-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <span>{item.title}</span>
                        <span>${item.price}</span>
                        <span className="flex max:flex-col gap-2 w-fit  min-w-1/3 mr-auto">
                          <button
                            className="items-center rounded-md border border-transparent px-1 py-1 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
  focus:ring-indigo-500"
                            onClick={() => {
                              handleInc(item);
                            }}
                          >
                            +
                          </button>
                          <span className="align-middle w-fit">
                            {item.qty} {" units"}
                          </span>
                          <button
                            className="items-center rounded-md border border-transparent  px-1 py-1 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
  focus:ring-indigo-500"
                            onClick={() => handleDec(item)}
                          >
                            -
                          </button>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4 ">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">
                    $
                    {cartItems
                      .reduce((total, item) => total + item.price * item.qty, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
              <div className=" p-4 rounded-md h-fit bg-[#242424]">
                <h3 className="text-lg font-bold h-10 w-full align-middle text-white">
                  Shipping Information
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Address"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="City"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="State/Province"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Postal Code"
                    required
                  />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Country"
                    required
                  />
                  <button
                    type="submit"
                    className="rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500 md:w-2/5"
                  >
                    Proceed to Payment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
