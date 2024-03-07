import Nav from "./Nav";

const Header = () => {
  return (
    <header className="z-30 fixed top-0 w-full h-24 flex items-center bg-white">
      <Nav />
    </header>
  );
};

export default Header;
