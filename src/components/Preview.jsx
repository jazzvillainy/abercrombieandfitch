import React, { useContext } from "react";
import { CartId } from "../context/CartIdContext";
import { CartList } from "../context/CartItemContext";
import { Total } from "../context/CartTotalPrice";
import { PreviewData } from "../context/PreviewDataContext";

function Preview({ setShowPreview, IsLoading }) {
  // const { setCartId } = useContext(CartId);
  // const { cartItems, setCartItems } = useContext(CartList);
  // const {setTotalPrice, totalPrice} = useContext(Total);
  // console.log(data);
  const { data } = useContext(PreviewData);

  return (
    <>

      <div className="flex flex-col gap-8 border-solid  border-2 h-dvh max-sm:w-[50%] max-[1024]:w-[40dvwb] sm:w-2/4 overflow-auto sticky max-md:hidden top-0">
        <button className="bg-stone-100" onClick={() => setShowPreview(false)}>
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
    </>
  );
}

// export const cartIdContext = createContext(cartId)

export default Preview;
