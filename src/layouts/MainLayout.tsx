import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main
      id="main-layout"
      className="mx-auto w-[77.5%] min-h-screen scroll-smooth"
    >
      {children}
    </main>
  );
};

export default MainLayout;
