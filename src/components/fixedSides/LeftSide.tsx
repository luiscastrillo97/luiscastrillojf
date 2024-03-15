import SocialMediaIcons from "./SocialMediaIcons";

const LeftSide = () => {
  return (
    <div className="fixed bottom-0 left-0 w-[9.5%]">
      <div className="h-full flex justify-center">
        <div className="flex flex-col items-center justify-between gap-10">
          <div className="flex flex-col gap-8">
            <SocialMediaIcons />
          </div>
          <div className="h-24 bg-quaternary dark:bg-dark-tertiary w-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
