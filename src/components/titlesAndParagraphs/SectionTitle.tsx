interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-5 text-clamp-h2 mb-10 w-full font-semibold after:opacity-50 after:bg-tertiary after:dark:bg-dark-tertiary after:h-[1px] after:w-full after:md:w-[38%]">
      <h2 className="text-nowrap">{title}</h2>
    </div>
  );
};

export default SectionTitle;
