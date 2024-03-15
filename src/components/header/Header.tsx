"use client";
import { useCallback, useEffect, useState } from "react";

import Nav from "./Nav";
import SideBar from "./SideBar";
import Icon from "./Icon";
import BottomShadow from "./BottomShadow";

const Header = () => {
  const [show, setShow] = useState(true);
  const [isSideBarShowed, setIsSideBarShowed] = useState(false);
  const [onTop, setOnTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (!isSideBarShowed) {
      if (window.scrollY > lastScrollY && window.scrollY > 0) {
        setShow(false);
      } else {
        setShow(true);
      }

      setOnTop(window.scrollY <= 0 ? true : false);
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, isSideBarShowed]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar, onTop]);

  return (
    <>
      <header
        id="header"
        className={`${show ? "top-0" : "-top-16"} ${
          onTop ? "h-24" : "h-16"
        } fixed backdrop-blur-md z-30 w-full flex items-center bg-primary/70 dark:bg-dark-primary/70 transition-all ease-[cubic-bezier(0.645,0.045,0.355,1)] duration-300`}
      >
        <div className="w-full flex justify-between items-center px-8 lg:px-10 xl:px-14">
          <Icon />
          <Nav />
          <SideBar setIsSideBarShowed={setIsSideBarShowed} />
        </div>
      </header>
      <BottomShadow onTop={onTop} show={show} />
    </>
  );
};

export default Header;
