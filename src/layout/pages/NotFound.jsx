import React from "react";
import { NavLink } from "react-router-dom";

function NotFound(){
  return (
    <section className="bg-stone-100 text-center flex flex-col justify-center align-middle w- h-[100dvh]">
      <>
        <div className=" text-xl">
          <b> 404 Page Not Found</b>
        </div>
        {/* <div className="text-sm">Have another go?</div> */}
        <span className="mt-5">
          <NavLink>
            <button
              className="items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500"
            >
              Go to the home page
            </button>
          </NavLink>
        </span>
      </>
    </section>
  );
}

export default NotFound;
