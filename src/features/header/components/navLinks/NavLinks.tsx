"use client";
import { navLinks } from "@/features/header/content/navLinks";
import { useHash } from "@/features/header/hooks";
import Link from "next/link";
import { SetStateAction } from "react";

interface Props {
  setShowSideBar?: (value: SetStateAction<boolean>) => void;
}

const NavLinks = ({ setShowSideBar }: Props) => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setShowSideBar && setShowSideBar(false);
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
            className={`cursor-pointer font-semibold transition-all hover:scale-105 hover:text-black dark:hover:text-dark-secondary`}
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
