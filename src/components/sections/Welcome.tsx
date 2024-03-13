const WelcomeSection = () => {
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
        <button
          type="button"
          className="p-3 bg-primary text-primary font-semibold rounded-md border border-primary hover:bg-secondary dark:text-dark-primary dark:bg-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondary"
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
