"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);

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
        className={`relative flex ${
          isChecked
            ? "justify-start !bg-dark-primary  md:!bg-dark-secondary"
            : "justify-end !bg-primary  md:!bg-secondary"
        }  w-16 h-9 dark:peer-focus:ring-blue-800 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 `}
      >
        <div className="px-2 flex items-center text-primary dark:text-dark-primary">
          {isChecked ? <BsMoonStars size={20} /> : <FiSun size={20} />}
        </div>
      </div>
    </label>
  );
};

export default SwitchTheme;
