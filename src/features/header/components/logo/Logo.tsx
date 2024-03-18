import Image from "next/image";
import logo from "@/features/header/content/images/logo.svg";
import { LogoImage } from "@/features/header/components/image";

const Logo = () => {
  return (
    <a
      href="/"
      className="transition-all hover:scale-110 hover:text-black dark:hover:text-dark-secondary"
    >
      {/* <p className="text-xl font-semibold text-nowrap">{`<LC />`}</p> */}
      <LogoImage />
    </a>
  );
};

export default Logo;
