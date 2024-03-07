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
    <div className="min-h-screen scroll-smooth">
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
    </div>
  );
};

export default Root;
