// import { IconName } from "react-icons/md";
import { NavLink, useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import Nav from "../components/navbar/Nav";
import CartOverlay from "../components/CartOverlay";
import Login from "../components/navbar/Login";
import { MyContext } from "../context/Context";
import SearchBar from "../components/navbar/SearchBar";
import { SearchContext } from "../context/SearchBarContext";
import NavigatorHeader from "../components/navbar/NavigatorHeader";
import SideBar from "../components/SideBar";
import ImageApiComp from "../components/ImageApiComp";
import Preview from "../components/Preview";
import { PreviewData } from "../context/PreviewDataContext";
import MobilePreview from "../components/MobilePreview";

function RootLayout() {
  const { setIsShow } = useContext(MyContext);
  const [sideBar, setSideBar] = useState(false);
  const { isShow } = useContext(MyContext);
  const { showSearchBar } = useContext(SearchContext);
  const [showImage, setShowImage] = useState(true);
  const { pathname } = useLocation();
  const { smallPrev, setSmallPrev } = useContext(PreviewData);
  const [cartIsShowing, setCartIsShowing] = useState(false);
  
  
  const handleSideBar2 = () => {
    setSideBar(false);
  };
  const handleSideBar = () => {
    setSideBar(true);
  };
  useEffect(()=>{
    if (pathname !== "/") {
      setShowImage(false);
    }
  },[pathname])
  return (
    <>
      <Login />
      <NavigatorHeader handleSideBar={handleSideBar} />
      {smallPrev && <MobilePreview />}
      {showImage && (
        <>
          {/* <div className="flex items-center justify-around h-20 w-full bg-[#242424] z-50 top-0 "></div> */}
        </>
      )}
      {sideBar && <SideBar handleSideBar2={handleSideBar2} />}
      <div>
        {/* <Nav /> */}
        {isShow ? <CartOverlay setCartIsShowing={setCartIsShowing} /> : ""}
        <Outlet />
        {showSearchBar && <SearchBar />}
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
