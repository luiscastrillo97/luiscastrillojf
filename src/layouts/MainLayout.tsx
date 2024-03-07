import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return <main className="mx-auto w-[77.5%] min-h-screen">{children}</main>;
};

export default MainLayout;
