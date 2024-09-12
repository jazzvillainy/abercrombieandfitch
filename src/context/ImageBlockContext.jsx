import { createContext } from "react";
import { useState } from "react";

export const ImageBlockContext = createContext();

const ImageBlockContextV = ({ children })=> {
  const [data, setData] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  <ImageBlockContext.Provider
    value={{ data, setData, showPreview, setShowPreview }}
  >
    {children}
  </ImageBlockContext.Provider>
}
export default ImageBlockContextV;
