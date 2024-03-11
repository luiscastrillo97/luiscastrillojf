import {
  About,
  Contact,
  Experience,
  FixedSides,
  Footer,
  Header,
  Welcome,
  Work,
} from "@/components";
import { MainLayout } from "@/layouts";

const Root = () => {
  return (
    <>
      <Header />
      <FixedSides />
      <MainLayout>
        <Welcome />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </MainLayout>
    </>
  );
};

export default Root;
