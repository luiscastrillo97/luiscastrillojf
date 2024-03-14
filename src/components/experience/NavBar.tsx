"use client";
import { workExperience } from "@/config";
import { useState } from "react";

interface Props {
  getData: (current: string) => void;
}

const NavBar = ({ getData }: Props) => {
  const [current, setCurrent] = useState("current");

  const handleOnClick = (id: string) => {
    getData(id);
    setCurrent(id);
  };

  return (
    <div className="flex overflow-x-auto sm:flex-col sm:overflow-x-hidden">
      {workExperience.map(({ id, name }, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleOnClick(id)}
          className={`min-w-36 sm:w-auto p-2 min-h-12 text-center sm:text-start ${
            id === current
              ? "border-primary text-primary dark:border-dark-primary dark:text-dark-primary"
              : "border-primary/30 text-primary/80 dark:border-dark-primary/20 dark:text-dark-primary/70"
          } border-b-2 sm:border-b-0 sm:border-l-2 hover:bg-secondary/70 dark:hover:bg-dark-secondary/70`}
        >
          <span className="font-medium">{name}</span>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
