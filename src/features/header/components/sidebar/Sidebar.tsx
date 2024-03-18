"use client";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useMouseDown } from "@/hooks/useMouseDown";
import { defaultBreakpoints, useMediaQuery } from "@/hooks/useMediaQuery";
import {
  MenuButton,
  NavLinks,
  SwitchThemeButton,
} from "@/features/header/components";

interface Props {
  setIsSideBarShowed: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ setIsSideBarShowed }: Props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const mainLayoutElement =
    typeof document !== "undefined" && document.querySelector("#main-layout");
  const layoutElement =
    typeof document !== "undefined" && document.querySelector("#layout-body");

  const hideSideBar = useCallback(() => {
    setIsSideBarShowed(false);
    setShowSideBar(false);
  }, [setIsSideBarShowed, setShowSideBar]);

  const handleOnClick = () => {
    setIsSideBarShowed(!showSideBar);
    setShowSideBar(!showSideBar);
  };

  const { ref } = useMouseDown(() => {
    hideSideBar();
  }, []);

  const isMd = useMediaQuery(defaultBreakpoints.md);

  useEffect(() => {
    if (isMd) {
      hideSideBar();
    }
  }, [isMd, setIsSideBarShowed, showSideBar, hideSideBar]);

  const addClasses = useCallback(() => {
    if (mainLayoutElement && layoutElement) {
      mainLayoutElement.classList.add("blur-md");
      mainLayoutElement.classList.add("pointer-events-none");
      layoutElement?.classList.add("overflow-y-hidden");
    }
  }, [layoutElement, mainLayoutElement]);

  const removeClasses = useCallback(() => {
    if (mainLayoutElement && layoutElement) {
      mainLayoutElement.classList.remove("blur-md");
      mainLayoutElement.classList.remove("pointer-events-none");
      layoutElement.classList.remove("overflow-y-hidden");
    }
  }, [layoutElement, mainLayoutElement]);

  useEffect(() => {
    if (showSideBar) {
      addClasses();
    } else {
      setIsSideBarShowed(false);
      removeClasses();
    }
  }, [
    showSideBar,
    mainLayoutElement,
    layoutElement,
    addClasses,
    removeClasses,
    setIsSideBarShowed,
  ]);

  return (
    <div ref={ref} id="side-bar" className="contents md:hidden">
      <MenuButton handleOnClick={handleOnClick} showSideBar={showSideBar} />
      <div
        className={`fixed ${
          showSideBar ? "right-0" : "-right-[450px]"
        } h-screen w-4/6 sm:w-[400px] top-0 bg-secondary dark:bg-dark-secondary transition-all ease-[cubic-bezier(0.645,0.045,0.355,1)] duration-200`}
      >
        <nav className="flex flex-col justify-center items-center gap-20 h-full w-full">
          <SwitchThemeButton />
          <ul className="text-center text-xl flex flex-col justify-center items-center gap-10">
            <NavLinks setShowSideBar={setShowSideBar} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
