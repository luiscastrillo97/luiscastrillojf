import { SwitchThemeButton, NavLinks } from "@/features/header/components";

const Navbar = () => {
  return (
    <nav className={`md:flex justify-between items-center z-30 hidden`}>
      <div className="flex items-center gap-5">
        <ul className="flex justify-between items-center gap-5">
          <NavLinks />
        </ul>
        <SwitchThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
