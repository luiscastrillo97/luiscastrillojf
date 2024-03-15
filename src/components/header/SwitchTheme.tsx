"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, [theme]);

  const handleOnChange = (event: any) => {
    const { checked } = event.target;
    setIsChecked(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <label className="inline-flex items-center cursor-pointer ">
      <input
        type="checkbox"
        value=""
        checked={isChecked}
        className="sr-only peer"
        onChange={handleOnChange}
      />
      <div
        className={`relative flex w-16 h-9 bg-primary justify-end dark:justify-start md:bg-secondary dark:!bg-dark-primary  dark:md:!bg-dark-secondary dark:peer-focus:ring-blue-800 rounded-full dark:after:translate-x-full rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 `}
      >
        <div className="px-2 flex items-center text-primary dark:text-dark-primary">
          <BsMoonStars className="hidden dark:flex" size={20} />
          <FiSun className="flex dark:hidden" size={20} />
        </div>
      </div>
    </label>
  );
};

export default SwitchTheme;
