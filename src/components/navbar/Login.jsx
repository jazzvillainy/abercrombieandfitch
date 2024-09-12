import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  return (
    <div className="flex h-8 w-[100dvw] max-md:hidden bg-white text-center">
      <p className="w-1/2">
        <b>A & F</b>
      </p>
      <div className=" flex  justify-around w-full bg-white max-[788px]:hidden">
        <p>
          <b>Abercrombie Kids</b>
        </p>
        <p>
          <NavLink className="text-black">Sign In</NavLink> or{" "}
          <NavLink to="signup" className="text-black">
            Create Account
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login