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
            ? "justify-start !bg-[#070F2B]  md:!bg-[#1B1A55]"
            : "justify-end !bg-[#535C91]"
        }  w-16 h-9 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 `}
      >
        <div className="px-2 flex items-center text-primary">
          {isChecked ? <BsMoonStars size={20} /> : <FiSun size={20} />}
        </div>
      </div>
    </label>
  );
};

export default SwitchTheme;
