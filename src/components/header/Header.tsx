"use client";
import { useCallback, useEffect, useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [show, setShow] = useState(true);
  const [onTop, setOnTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setOnTop(window.scrollY === 0 ? true : false);
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar, onTop]);

  return (
    <>
      <header
        className={`${!show ? "fixed -top-20" : "fixed top-0"} ${
          onTop ? "h-24" : "h-20"
        } backdrop-blur-md z-40 bg-opacity-70 w-full flex juatify-center items-center bg-[#070F2B] transition-all ease-[cubic-bezier(0.645,0.045,0.355,1)] duration-200`}
      >
        <Nav display={``} />
      </header>
      <div
        className={`${
          onTop ? "hidden" : show ? "fixed top-20" : "fixed top-0"
        } z-50 h-4 w-full border-none bg-gradient-to-b from-black from-0% to-transparent to-90% opacity-20 transition-all ease-linear duration-200`}
      ></div>
    </>
  );
};

export default Header;
