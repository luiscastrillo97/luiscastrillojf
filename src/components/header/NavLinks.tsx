"use client";
import { navLinks, navLinksClass } from "@/config";
import useHash from "@/hooks/useHash";
import Link from "next/link";
import { SetStateAction } from "react";

interface Props {
  setShowSideBar?: (value: SetStateAction<boolean>) => void;
}

const NavLinks = ({ setShowSideBar }: Props) => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setShowSideBar && setShowSideBar(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useHash(handleClickScroll);

  return (
    <>
      {navLinks.map(({ name, id }, index) => (
        <li key={index}>
          <button
            type="button"
            onClick={() => handleClickScroll(id)}
            className={`cursor-pointer font-semibold ${navLinksClass}`}
          >
            <Link href={`/#${id}`} scroll={false}>
              {name}
            </Link>
          </button>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
