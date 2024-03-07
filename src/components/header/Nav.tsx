import { navLinks } from "@/config";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center w-11/12 mx-auto">
      <p>icon</p>
      <ul className="flex justify-between gap-3">
        {navLinks &&
          navLinks.map(({ name, url }, index) => (
            <li key={index}>
              <Link href={url}>{name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
