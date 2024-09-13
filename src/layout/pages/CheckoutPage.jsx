import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { CartList } from "../../context/CartItemContext";
import { backdropClasses, Backdrop } from "@mui/material";
import { circularProgressClasses, CircularProgress } from "@mui/material";
import useFetch from "../../context/useFetch";

function CheckoutPage() {
  const { cartItems } = useContext(CartList);
  const { IsLoading, error, itemData } = useFetch(
    "https://fakestoreapi.com/products/",
    "posts"
  );

  

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
                <ul className="space-y-2">
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex h-fit w-full p-5 bg-white gap-5  min-w-40dvh hover:bg-stone-100 border rounded-lg"
                    >
                      <div className="bg-white max-h-[8rem] max-w-[8rem]">
                        <img
                          className="h-full w-full"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <span>{item.title}</span>
                      <span>${item.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mt-4 ">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">
                    ${cartItems.reduce((total, item) => total + item.price, 0)}
                  </span>
                </div>
              </div>
              <div className=" p-4 rounded-md bg-stone-800">
                <h3 className="text-lg font-bold">Shipping Information</h3>
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
