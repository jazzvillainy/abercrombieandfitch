// import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchBarContext";
import useFetch from "../../context/useFetch";
import ImageBlock from "../photoblock/ImageBlock";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Backdrop, CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";

function SearchBar() {
  const { setShowSearchBar } = useContext(SearchContext);
  const [state, setState] = useState("");
  const { IsLoading, error, itemData } = useFetch(
    "https://fakestoreapi.com/products/",
    "posts"
  );

  if (error) {
    // throw " ";
    return (
      <section className="bg-stone-100 text-center flex flex-col justify-center align-middle w- h-[100dvh]">
        <>
          <div className=" text-xl">
            <b>{(error.message = " . check your internet connection")}</b>
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
    <div className="overlayTransparent relative">
      <div className="bg-white overflow-y-scroll h-full w-2/5 right-0 absolute">
        <span className="h-[10dvh] w-full bg-[#242424] text-white flex justify-between items-center">
          {/* <p> Search Item (1 item)</p> */}
          <input
            className="text-black right-0 w-2/3"
            placeholder="🔍 Search Items"
            type="text"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
          <button
            className=" bg-opacity-50 z-50  border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500 w-7 h-7 fixed right-5 top-5 rounded-[100%]"
            onClick={() => {
              setShowSearchBar(false);
            }}
          >
            x
          </button>
        </span>
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
            <ul className="p-4">
              {itemData
                .filter((item) => {
                  return (
                    item.category.split(" ").includes(state) ||
                    item.title.split("").includes(state)
                  );
                })
                .map((x) => {
                  return (
                    <NavLink to={`/${x.category}`}>
                      <li
                        key={x.id}
                        className="text-black w-full hover:bg-stone-700 rounded-md h-full p-4"
                      >
                        <div>{x.title}</div>
                        {/* <ImageBlock hidden={"hidden"} el={x} /> */}
                      </li>
                    </NavLink>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
