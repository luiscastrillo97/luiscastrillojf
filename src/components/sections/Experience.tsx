"use client";
import { SectionTitle } from "../titlesAndParagraphs";
import { ExperienceContents, NavBar } from "../experience";
import { workExperience } from "@/config";
import { useEffect, useState } from "react";
import { ExperienceContent } from "@/interfaces";

const Experience = () => {
  const [data, setData] = useState<ExperienceContent[]>([]);

  const getData = (current: string = "current") => {
    const experience = workExperience.filter(({ id }) => current === id);
    setData(experience[0].content);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="jobs" className="w-full flex justify-center py-24">
      <div className="w-full flex flex-col items-center md:max-w-[700px]">
        <SectionTitle title="Where I Have Worked" />
        <div className="max-w-full flex flex-col justify-between gap-10 sm:flex-row">
          <NavBar getData={getData} />
          <div className="w-full flex flex-col gap-5 sm:w-3/5 ">
            <ExperienceContents content={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
