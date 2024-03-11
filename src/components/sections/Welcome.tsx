const WelcomeSection = () => {
  return (
    <section className="flex flex-col items-start justify-center pt-28 h-auto min-h-screen">
      <div>
        <h5 className="text-xl">Hi, my name is</h5>
      </div>
      <div>
        <h2 className="text-clamp-h1 font-semibold ">Luis Castrillo</h2>
      </div>
      <div>
        <h2 className="text-clamp-h1 font-semibold">
          I am a Software Developer
        </h2>
      </div>
      <div className="w-[600px] my-5">
        <p className="text-xl">
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
          className="p-3 bg-blue-600 border-2 rounded-md text-white"
        >
          Resume
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
