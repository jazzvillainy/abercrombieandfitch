import { createContext, useState } from "react";

export const CartId = createContext("");

export default function cartIdContext({children}) {
    const [cartId, setCartId] = useState(0);
  return (
    <CartId.Provider value={{ cartId, setCartId }}>{children}</CartId.Provider>
  );
}
