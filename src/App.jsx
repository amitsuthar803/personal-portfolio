// App.jsx
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { useRef, useState } from "react";
import "./App.css";
import { Turn as Hamburger } from "hamburger-react";

const App = () => {
  const [sidebarWidth, setSidebarWidth] = useState("w-64");
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const hamburgerRef = useRef();

  const toggleSidebarWidth = () => {
    setSidebarWidth((prevWidth) => (prevWidth === "w-64" ? "w-0" : "w-64"));
    setIsHamburgerActive((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      <div
        className={` cursor-pointer fixed right-0 md:hidden z-40 `}
        onClick={toggleSidebarWidth}
        id="hamburgerButton"
        ref={hamburgerRef}
      >
        <Hamburger toggled={isHamburgerActive} toggle={!isHamburgerActive} />
      </div>

      <Sidebar
        sidebarWidth={sidebarWidth}
        setSidebarWidth={setSidebarWidth}
        toggleSidebarWidth={toggleSidebarWidth}
        hamburgerRef={hamburgerRef}
        setIsHamburgerActive={setIsHamburgerActive}
      />
      <div
        className={`flex-1  m-auto ${
          sidebarWidth === "w-64" ? "md:ml-64" : ""
        }`}
      >
        {/* Adjust ml-64 based on your Sidebar's width */}
        <MainContent />
      </div>
    </div>
  );
};

export default App;
