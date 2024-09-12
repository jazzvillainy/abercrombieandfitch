
import ImageBlock from "./photoblock/ImageBlock";
import { PreviewContext } from "../context/PreviewContext";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";


function Content({ itemData, setShowPreview, IsLoading, error, status}) {
  
  // console.log(itemData);
  if (error) {
    // throw " ";
    return (
      <section className="bg-stone-100 text-center flex flex-col justify-center align-middle h-[100dvh]">
        <>
  
            <button
              className="items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
          focus:ring-indigo-500"
            >
              Try again
            </button>
        </>
      </section>
    );
  }
  
  
  return IsLoading ? (<CircularProgress />) : (
    <div className="flex flex-wrap bg-transparent bg-opacity-50 gap-5 py-24c justify-center border-solid h-full w-fit">
      {itemData.map((el) => {
        return (
          <ImageBlock status={status}
            setShowPreview={setShowPreview}
            key={el.id}
            el={el}
          />
        );
      })}
    </div>
  );
}

export default Content;
