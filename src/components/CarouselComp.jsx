import { useQuery } from "@tanstack/react-query";
import React from "react";
import Slider from "react-slick";
import useFetch from "../context/useFetch";
import ImageBlock from "./photoblock/ImageBlock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLeaf } from "react-icons/fa";
import { backdropClasses, Backdrop } from "@mui/material";
import { circularProgressClasses, CircularProgress } from "@mui/material";

function  CarouselComp({ cat, setData, setShowPreview, hidden }) {
  const { IsLoading, error, itemData } = useFetch(
    "https://fakestoreapi.com/products/",
    "posts"
  );

  if (error) {
    // a spinner colud be more appropriate
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

  var settings = {
    dots: true, // Show dots navigation
    infinite: true, // Infinite loop
    speed: 1000, // Slide transition speed
    slidesToShow: 2, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 425,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 375,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      // {
      //   breakpoint: 320,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="w-[100%] h-[60dvh] ">
      {IsLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <Slider autoplay autoplaySpeed={1000} {...settings}>
          {itemData
            .filter((item) => item.category === cat)
            .map((item) => (
              <li className="w-[100dvh] max-sm:ml-2 sm:ml-3 md:ml-1" key={item.id}>
                <ImageBlock
                  setData={setData}
                  setShowPreview={setShowPreview}
                  el={item}
                  hidden={hidden}
                />
              </li>
            ))}
        </Slider>
      )}
    </div>
  );
}

export default CarouselComp;
