import React, { createContext, useState } from "react";

const CartStuffContext = createContext(null);

function CartStuffProvider({ children }) {
  const [cartId, setCartId] = useState(true);
  return <CartStuffContext.Provider value={{cartId, setCartId}}>{children}</CartStuffContext.Provider>;
}

export default CartStuffProvider;
