import Image from "next/image";
import photo from "@/content/about/1691513210104.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 flex justify-center">
      <div className="max-w-4xl">
        <h2 className="text-3xl mb-10 w-full">About Me</h2>
        <div className="flex">
          <div className="w-2/3 pr-10 flex flex-col gap-2">
            <p>
              I am a Master in Engineering graduated from the University of
              Magdalena, where I also completed with distinction my
              undergraduate studies in Electronic Engineering, being recognized
              with honorable mention CUM LAUDE.
            </p>
            <p>
              I characterize myself as a young, serious, responsible,
              integrated, dynamic, proactive person, with teamwork skills, high
              adaptability and open to learn new technologies.
            </p>
            <p>
              I have knowledge, skills and experience in web application
              development, making use of HTML, CSS, JavaScript, TypeScript,
              ReactJS, NextJS and Tailwind CSS.
            </p>
            <p>
              I also have knowledge and skills in web development with Django
              and Django Rest Framework; relational database management with
              PostgreSQL and non-relational databases such as MongoDB; and
              deployment in containers with Docker and cloud services such as
              AWS and Microsoft Azure.
            </p>
          </div>
          <div className="flex w-2/5 justify-center pr-9">
            <div className="w-full h-fit z-0">
              <Image
                src={photo}
                alt="Luis' photo"
                className="rounded-xl"
                width="1200"
                height="1200"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
