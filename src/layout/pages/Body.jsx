import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import Content from "../../components/Content";
import Preview from "../../components/Preview";
import { NavLink } from "react-router-dom";
import ImageApiComp from "../../components/ImageApiComp";
import { backdropClasses, Backdrop } from "@mui/material";
import { circularProgressClasses, CircularProgress } from "@mui/material";
import NavigatorHeader from "../../components/navbar/NavigatorHeader";
import { PreviewData } from "../../context/PreviewDataContext";
import useFetch from "../../context/useFetch";

function Body({ isShow }) {
  // const classes = useStyles

  const { setData, setShowPreview, showPreview, showContent } =
    useContext(PreviewData);
  const { IsLoading, error, itemData } = useFetch(
    "https://fakestoreapi.com/products/",
    "posts"
  );

  // const {} = useMutation({
  //   mutationFn: (newPost) => fetch("https://fakestoreapi.com/products/", {
  //     method: "POST",
  //     body: JSON.stringify(newPost)
  //   }).then((res)=> res.json),
  // });
  // console.log(itemData);

  if (error) {
    // throw " ";
    return (
      <section className="bg-stone-100 text-center flex flex-col justify-center align-middle h-[100dvh]">
        <>
          <div className=" text-xl bg-stone-100">
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
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <div className="max-md:pt-[5rem]">
            <ImageApiComp />
          </div>
          <div className="flex will-change-transform min-w-[100%] bg-white w-[100dvw] pb-[10rem] max-md:pt-[10rem]">
            {showPreview && (
              <Preview
                // hidden={true}
                setShowPreview={setShowPreview}
              />
            )}
            <>
              <Content
                status={"hidden"}
                setShowPreview={setShowPreview}
                itemData={itemData}
                IsLoading={IsLoading}
                error={error}
              />
            </>
          </div>
          {/* <NavigatorHeader /> */}
        </>
      )}
    </>
  );
}
export default Body;
