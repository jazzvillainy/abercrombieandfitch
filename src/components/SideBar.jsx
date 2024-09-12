import React from 'react'
import { NavLink } from 'react-router-dom';
function SideBar({handleSideBar2}) {
  return (
    <div className="w-full h-full fixed backdrop-blur-sm top-0 z-50" onClick={handleSideBar2}>
      <div className="flex flex-col gap-0 transition-transform  h-full w-1/2 bg-stone-700 absolute">
        <div className="flex flex-col p-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="men">Men's</NavLink>
          <NavLink to="womens">Women's</NavLink>
          <NavLink to="electronics">Electronics</NavLink>
          <NavLink to="jewelry">Jewelries</NavLink>
          <NavLink className="text-black">Sign In</NavLink>{" "}
          <NavLink to="signup" className="text-black">
            Create Account
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar