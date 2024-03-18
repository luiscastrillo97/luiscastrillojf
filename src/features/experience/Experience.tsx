"use client";
import { useState } from "react";
import { SectionTitle } from "@/components/sectionTitle";
import { Navbar, Body } from "@/features/experience/components";
import { ExperienceContent } from "@/interfaces";
import { workExperience } from "@/features/experience/content/workExperience";

const Experience = () => {
  const initialExperience = workExperience.filter(
    ({ id }) => id === "current"
  )[0].content;
  const [data, setData] = useState<ExperienceContent[]>(initialExperience);

  const getData = (current: string = "current") => {
    const experience = workExperience.filter(({ id }) => current === id);
    setData(experience[0].content);
  };

  return (
    <section id="jobs" className="w-full flex justify-center py-24">
      <div className="w-full flex flex-col items-center md:max-w-[700px]">
        <SectionTitle title="Where I Have Worked" />
        <div className="max-w-full flex flex-col justify-between gap-10 sm:flex-row">
          <Navbar getData={getData} />
          <div className="w-full flex flex-col gap-5 sm:w-3/5 ">
            <Body content={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
