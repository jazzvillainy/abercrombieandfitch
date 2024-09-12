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
    <div>
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
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-bold">Order Summary</h3>
                <ul className="space-y-2">
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <div className="bg-white w-[20dvh] h-[20dvh]">
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
                <div className="flex justify-between mt-4">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">
                    ${cartItems.reduce((total, item) => total + item.price, 0)}
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
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
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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
