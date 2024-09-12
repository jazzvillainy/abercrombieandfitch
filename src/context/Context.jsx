import { createContext } from "react";
import { useState } from "react";



export const MyContext = createContext("");


const MyProvider = ({children}) => {
    const [isShow, setIsShow] = useState(false)

    return (
      <MyContext.Provider value={{ isShow, setIsShow }}>
        {children}
      </MyContext.Provider>
    );
}
export default MyProvider