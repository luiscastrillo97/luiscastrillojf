import { Footer } from "@/components";
import {
  About,
  Contact,
  Experience,
  FixedSides,
  Header,
  Projects,
  Welcome,
} from "@/features";
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
        <Projects />
        <Contact />
        <Footer />
      </MainLayout>
    </>
  );
};

export default Root;
