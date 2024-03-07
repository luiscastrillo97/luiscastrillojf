import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const FixedSides = () => {
  return (
    <section className="hidden md:contents">
      <RightSide />
      <LeftSide />
    </section>
  );
};

export default FixedSides;
