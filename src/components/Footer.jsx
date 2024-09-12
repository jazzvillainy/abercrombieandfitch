import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div
      className="lg:flex lg:justify-between lg:px-20 py-10 gap-10 max-lg:flex max-lg:flex-wrap max-lg:px-20 max-lg:justify-between max-lg:w-full bg-stone-900 
    max-md:flex max-md:justify-center items-start "
    >
      <ul className="text-white min-w-64">
        <span>
          <b>About Us</b>
        </span>
        <li>Brand Protection</li>
        <li>Careers</li>
        <li>A&F Gives Back</li>
        <li>Accessibility</li>
        <li>Inclusion & Diversity</li>
        <li>Investors Press Room Sustainability</li>
      </ul>
      <ul className="text-white min-w-64">
        <span>
          <b>Help</b>
        </span>
        <li>Customer Help</li>
        <li>Order Help</li>
        <li>Shipping & Handling</li>
        <li>Online Returns</li>
        <li>Track My Order</li>
        <li>Gift Cards & E-Cards Balance</li>
        <li>My Account Currency</li>
      </ul>
      <div className="flex flex-col gap-12 min-w-fit">
        <span className="text-white">
          <b>Subscribe</b>{" "}
        </span>
        <form action="">
          <label htmlFor="footerForm">
            <input
              id="footerForm"
              className="h-12"
              type="text"
              placeholder="Email Address"
            />
          </label>
          <button
            className="rounded-md bg-opacity-50 z-50 p-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500"
          >
            Join
          </button>
        </form>
        <ul className="flex gap-7 text-white">
          <li>
            <FaTiktok />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaPinterestP />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
