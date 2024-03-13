"use client";
import { useEffect, useState } from "react";
import { useMouseDown } from "@/hooks/useMouseDown";
import { defaultBreakpoints, useMediaQuery } from "@/hooks/useMediaQuery";
import SwitchTheme from "./SwitchTheme";
import NavLinks from "./NavLinks";
import MenuButton from "./MenuButton";

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const mainLayoutElement =
    typeof document !== "undefined" && document.querySelector("#main-layout");
  const layoutElement =
    typeof document !== "undefined" && document.querySelector("#layout-body");

  const handleOnClick = () => {
    setShowSideBar(!showSideBar);
  };

  const { ref } = useMouseDown(() => {
    setShowSideBar(false);
  }, []);

  const isMd = useMediaQuery(defaultBreakpoints.md);

  useEffect(() => {
    if (isMd) {
      setShowSideBar(false);
    }
  }, [isMd]);

  const addClasses = () => {
    if (mainLayoutElement && layoutElement) {
      mainLayoutElement.classList.add("blur-md");
      layoutElement?.classList.add("overflow-y-hidden");
    }
  };

  const removeClasses = () => {
    if (mainLayoutElement && layoutElement) {
      mainLayoutElement.classList.remove("blur-md");
      layoutElement.classList.remove("overflow-y-hidden");
    }
  };

  useEffect(() => {
    if (showSideBar) {
      addClasses();
    } else {
      removeClasses();
    }
  }, [showSideBar, mainLayoutElement, layoutElement]);

  return (
    <div ref={ref} id="side-bar" className="contents md:hidden">
      <MenuButton handleOnClick={handleOnClick} showSideBar={showSideBar} />
      <div
        className={`fixed ${
          showSideBar ? "right-0" : "-right-[400px]"
        } h-screen w-4/6 sm:w-[400px] top-0 bg-[#1B1A55] transition-all ease-[cubic-bezier(0.645,0.045,0.355,1)] duration-200`}
      >
        <nav className="flex flex-col justify-center items-center gap-20 h-full w-full">
          <SwitchTheme />
          <ul className="text-center text-xl flex flex-col justify-center items-center gap-10">
            <NavLinks setShowSideBar={setShowSideBar} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;