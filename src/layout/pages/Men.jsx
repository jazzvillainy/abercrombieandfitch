import { useQuery } from "@tanstack/react-query";
import React from "react";
import useFetch from "../../context/useFetch";
import { useContext } from "react";
import ImageBlock from "../../components/photoblock/ImageBlock";
import { ImageBlockContext } from "../../context/ImageBlockContext";
import CarouselComp from "../../components/CarouselComp";
import Preview from "../../components/Preview";
import { backdropClasses, Backdrop } from "@mui/material";
import { circularProgressClasses, CircularProgress } from "@mui/material";
import { PreviewData } from "../../context/PreviewDataContext";

export function Men() {
  const {
    data: data,
    setData,
    setShowPreview,
    showPreview,
  } = useContext(PreviewData);
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
    <>
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
          <div className="h-[100dvh] min-h-[100dvh] bg-white p-10 max-md:pt-[20dvh] flex justify-center">
            <div className="max-w-[100dvw] flex flex-1 justify-center max-md:w-2/4 py-10 bg-white">
              <CarouselComp
                hidden={"hidden"}
                IsLoading={IsLoading}
                cat={"men's clothing"}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Men;
