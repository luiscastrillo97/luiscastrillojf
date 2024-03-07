import React from "react";

const RightSide = () => {
  return (
    <div className="fixed bottom-0 right-0 w-[9.5%] h-80">
      <div className="h-full flex justify-center">
        <div className="flex flex-col items-center justify-between">
          <div style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}>
            <a href="mailto:#">luiscastrillojfgmail.com</a>
          </div>
          <div className="h-24 bg-black w-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
