"use client";

import { navLinks } from "@/config";
import Link from "next/link";
import SwitchTheme from "./SwitchTheme";
import { useEffect } from "react";
import useHash from "@/hooks/useHash";

interface Props {
  display: string;
}

const Nav = ({ display }: Props) => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useHash(handleClickScroll);

  return (
    <nav
      className={`flex justify-between items-center w-11/12 mx-auto ${display} z-50`}
    >
      <a href="/">
        <p className="text-xl font-semibold">{`<LC />`}</p>
      </a>
      <div className="flex items-center gap-5">
        <ul className="flex justify-between items-center gap-5">
          {navLinks &&
            navLinks.map(({ name, id }, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleClickScroll(id)}
                  className="cursor-pointer"
                >
                  <Link href={`/#${id}`} scroll={false}>
                    {name}
                  </Link>
                </button>
              </li>
            ))}
        </ul>
        <SwitchTheme />
      </div>
    </nav>
  );
};

export default Nav;
