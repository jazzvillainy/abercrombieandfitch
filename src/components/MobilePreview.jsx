import React from "react";
import { PreviewData } from "../context/PreviewDataContext";
import { useContext } from "react";

function MobilePreview() {
  const { data, setSmallPrev } = useContext(PreviewData);
  if (!data) {
    return (
      <section className="bg-stone-100 text-center flex flex-col justify-center align-middle w-full h-[100dvh]">
        <>
          <div className=" text-xl">
            <b>{"Check your internet connection"}</b>
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
    <div className="w-full h-full fixed backdrop-blur-sm top-0 z-50">
      <div className="bg-white flex flex-col gap-8 border-solid  border-2 h-dvh min-h-full max-[1024]:w-[40dvwb] sm:w-2/4 overflow-auto fixed z-50">
        <button
          className=" bg-opacity-50 z-50  border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500 w-7 h-7 fixed md:translate-x-[23vw] rounded-[100%]"
          onClick={() => {
            setSmallPrev(false);
            console.log("dede");
          }}
        >
          x
        </button>
        <img
          className="p-8 hover:scale-110 transition duration-500"
          src={data.image}
          alt=""
        />
        <div>
          <p className="bg-stone-950 text-cyan-50 font-serif text-3xl p-7 text-center">
            {data.title}
          </p>
          <p className="bg-stone-500 text-white"> Price: ${data.price}</p>
          <p className="bg-stone-900 text-white">Rating: {data.rating.rate}</p>
        </div>
        <div className="flex justify-center"></div>
        <article className="bg-stone-900 p-9 gap-4 flex flex-col">
          <b className="bg-stone-500 rounded text-white p-4">Description :</b>{" "}
          <p className="text-yellow-50 rounded bg-black p-4">
            {data.description}
          </p>
        </article>
      </div>
    </div>
  );
}

export default MobilePreview;
