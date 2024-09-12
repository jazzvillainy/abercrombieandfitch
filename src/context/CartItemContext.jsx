import { createContext, useState } from "react";

export const CartList = createContext([]);

export default function CartItemS({ children }) {
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <CartList.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartList.Provider>
  );
}
