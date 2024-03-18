import { Button } from "@/components/button";

const Welcome = () => {
  return (
    <section className="flex flex-col items-start justify-center pt-28 h-auto min-h-screen gap-5">
      <div>
        <h5 className="text-base md:text-lg">Hi, my name is</h5>
      </div>
      <div>
        <h2 className="text-clamp-h1 font-semibold leading-none">
          Luis Castrillo.
        </h2>
      </div>
      <div>
        <h2 className="text-clamp-h1 font-semibold leading-none text-secondary dark:text-dark-tertiaty">
          I am a Software Developer.
        </h2>
      </div>
      <div>
        <p className="text-base md:text-lg">
          My passion for programming and development is reflected in my ability
          to skillfully use languages such as JavaScript and Python. My work
          focus is on addressing challenges related to flexibility, scalability,
          maintainability and performance, providing effective solutions to
          these problems.
        </p>
      </div>
      <div>
        <Button href="https://www.canva.com/design/DAF_n2AvN8M/c484bT1o2RsCVc1qNVAM5w/view?utm_content=DAF_n2AvN8M&utm_campaign=designshare&utm_medium=link&utm_source=editor">
          Resume
        </Button>
      </div>
    </section>
  );
};

export default Welcome;
