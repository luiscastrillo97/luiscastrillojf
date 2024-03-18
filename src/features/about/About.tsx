import { ProfilePhoto } from "@/features/about/components";
import { Technologies } from "@/features/about/components";
import { SectionTitle } from "@/components/sectionTitle";

const About = () => {
  return (
    <section id="about" className="py-24 flex justify-center">
      <div className="max-w-4xl">
        <SectionTitle title="About Me" />
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <div className="w-full flex flex-col gap-3 md:w-3/5">
            <p className="text-primary dark:text-dark-tertiaty">
              I am a Master in Engineering graduated from the University of
              Magdalena, where I also completed with distinction my
              undergraduate studies in Electronic Engineering, being recognized
              with honorable mention CUM LAUDE.
              <br />
              <br />I characterize myself as a young, serious, responsible,
              integrated, dynamic, proactive person, with teamwork skills, high
              adaptability and open to learn new technologies.
            </p>
            <h3 className="text-lg font-semibold">My Stack:</h3>
            <Technologies />
          </div>
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
};

export default About;
