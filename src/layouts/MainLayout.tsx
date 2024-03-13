import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main
      id="main-layout"
      className="mx-auto w-5/6 md:w-[75.5%] min-h-screen scroll-smooth"
    >
      {children}
    </main>
  );
};

export default MainLayout;
