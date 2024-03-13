import { sideLinksClass } from "@/config";
import React from "react";

const RightSide = () => {
  return (
    <div className="fixed bottom-0 right-0 w-[9.5%]">
      <div className="h-full flex justify-center">
        <div className="flex flex-col items-center justify-between gap-10">
          <div
            className={`${sideLinksClass} font-semibold`}
            style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
          >
            <a href="mailto:luiscastrillojfgmail.com">
              luiscastrillojfgmail.com
            </a>
          </div>
          <div className="h-24 bg-tertiary dark:bg-dark-tertiary w-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
