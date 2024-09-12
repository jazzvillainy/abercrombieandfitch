import { createContext } from "react";
import { useState } from "react";
import Preview from "../components/Preview";

export  const PreviewData = createContext(<Preview />);

function PreviewContextProv({ children }) {
  const [data, setData] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [smallPrev, setSmallPrev] = useState(false)

  return (
    <PreviewData.Provider
      value={{
        data,
        setData,
        showPreview,
        setShowPreview,
        smallPrev,
        setSmallPrev,
      }}
    >
      {children}
    </PreviewData.Provider>
  );
}

export default PreviewContextProv;
