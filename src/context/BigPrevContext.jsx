import { createContext, useState } from "react";

export const BigPreviewContext = createContext("");

function BigPreviewContextProv({ children }){
  const [showPreviewDown, setShowPreviewDown] = useState(false);
  <BigPreviewContext.Provider value={{ showPreviewDown, setShowPreviewDown }}>
    {children}
  </BigPreviewContext.Provider>;
};
export default BigPreviewContextProv;
