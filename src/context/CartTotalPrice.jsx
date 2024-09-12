import { createContext, useState } from "react";

export const Total = createContext(0)

  const TotalProv = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0)
   return (
     <Total.Provider value={{ totalPrice, setTotalPrice }}>
       {children}
     </Total.Provider>
   );
 };

 export default TotalProv