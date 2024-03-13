import SwitchTheme from "./SwitchTheme";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav className={`md:flex justify-between items-center z-30 hidden`}>
      <div className="flex items-center gap-5">
        <ul className="flex justify-between items-center gap-5">
          <NavLinks />
        </ul>
        <SwitchTheme />
      </div>
    </nav>
  );
};

export default Nav;
