interface Props {
  onTop: boolean;
  show: boolean;
}

const BottomShadow = ({ onTop, show }: Props) => {
  return (
    <div
      className={`${
        onTop ? "hidden" : show ? "fixed top-16" : "fixed top-0"
      } h-3 w-full z-20 border-none bg-gradient-to-b from-black from-0% to-transparent to-90% opacity-20 transition-all ease-[cubic-bezier(0.645,0.045,0.355,1)] duration-300`}
    ></div>
  );
};

export default BottomShadow;
