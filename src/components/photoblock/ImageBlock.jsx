import React, { useContext, useEffect, useState } from "react";
import { LuView } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { CartList } from "../../context/CartItemContext";
import { Total } from "../../context/CartTotalPrice";
import { MyContext } from "../../context/Context";
import { PreviewData } from "../../context/PreviewDataContext";
import { AddToCartContext } from "../../context/AddToCartContext";

function ImageBlock({ el, hidden: hide, status, key }) {
  const [isOnMouseOver, setIsMouseOver] = useState(false);
  const { cartItems, setCartItems } = useContext(CartList);
  const { setTotalPrice, totalPrice } = useContext(Total);
  const { setIsShow } = useContext(MyContext);
  const { setData, setShowPreview, smallPrev, setSmallPrev } =
    useContext(PreviewData);
  const [isShowMore, setIsShowMore] = useState(false);
  const [description, setDescription] = useState("");

  
  useEffect(() => {
    let truncateDescription = () => {
      if (isShowMore) {
        return el.title + " ";
      }
      return el.title.slice(0, 20) + "... ";
    };
    setDescription(truncateDescription);
  }, [isShowMore]);
  const toggleFullDescription = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      key={el.id}
      className="b transition duration-100 relative justify-between w-60 h-80 box-content text-blue-900 rounded-lg flex-col  text-xs pt-5 pl-4 pr-4 p-4 flex  hover:shadow-xl "
    >
      {isOnMouseOver && (
        <div className="flex absolute justify-between left-0 w-full">
          <button //homepage preview button
            className={`rounded-md max-md:hidden bg-opacity-50 z-50 p-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500 ${hide}`}
            onClick={() => {
              setShowPreview(true);
              setData(el); //for preview mapping
            }}
          >
            <LuView className="scale-150" />
          </button>

          <button //all add to preview button except homepage
            className={`md:${
              status === "hidden" ? status : ""
            } rounded-md bg-opacity-50 z-50 p-4 border borders-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500`}
            onClick={() => {
              setSmallPrev(true);
              setData(el);
            }}
          >
            <LuView className="scale-150" />
          </button>
          <button
            disabled={cartItems.includes(el.id)}
            className="rounded-md bg-opacity-50 z-50 p-4 border borders-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800   
 focus:ring-indigo-500"
            onClick={() => {
              // addToCart(el),
              // getTotalPriceForItem(el),
              setTotalPrice(totalPrice + el.price);
              setCartItems([...cartItems, { ...el, qty: el.qty || 1 }]);
              setIsShow(true);
            }}
          >
            <FaShoppingCart className="scale-150" />
          </button>
        </div>
      )}
      <img
        className="h-3/4 w-5/5 hover:scale-110 p-6 transition duration-500 "
        src={el.image}
        alt={el.description}
      />
      <div className="max-[568px]: bg-[#242424] px-5 pt-2 pb-1 rounded">
        <p className="text-white font-sans">
          {description}

          <button className="text-green-600" onClick={toggleFullDescription}>
            {isShowMore ? "less" : "more"}
          </button>
        </p>
        <p className="text-white py-2">${el.price}</p>
      </div>
      {/* <button className="text-gray-50">Preview</button> */}
    </div>
  );
}

export default ImageBlock;
