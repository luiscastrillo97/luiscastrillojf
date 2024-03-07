import { workExperience } from "@/config";
const Experience = () => {
  return (
    <section id="jobs" className="py-24">
      <div className="mx-auto max-w-[700px]">
        <h2 className="text-3xl pb-5">Where I Have Worked</h2>
        <div className="flex">
          <div className="w-2/5 flex flex-col items-start">
            {workExperience.map(({ name }, index) => (
              <button key={index} type="button" className="p-2 border-l-2 ">
                {name}
              </button>
            ))}
          </div>
          <div className="w-full flex flex-col gap-5">
            <div>
              <h3>Monitoring systems developer</h3>
              <h3>Oct 2021 - Jun 2023</h3>
              <p>
                Implement a wireless sensor network to monitor the conditions of
                banana crops in Magdalena, taking data such as temperature,
                humidity, among others.
              </p>
            </div>
            <div>
              <h3>Electronic Engineer</h3>
              <h3>Nov 2023 - Dec 2023</h3>
              <p>
                Develop literature reviews in Scopus and Web of Science using
                search equations to perform bibliometric analysis, create
                co-occurrence maps and present the results visually. In
                addition, review and conduct technical reports and papers on
                solar farm decommissioning to identify and compile current best
                practices and recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
