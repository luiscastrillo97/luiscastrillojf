import { LeftSide, RightSide } from "@/features/fixedSides/components";

const FixedSides = () => {
  return (
    <section className="z-0 hidden md:contents">
      <RightSide />
      <LeftSide />
    </section>
  );
};

export default FixedSides;
