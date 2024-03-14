interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-10 text-3xl mb-10 w-full md:w-3/5 font-semibold after:opacity-50 after:bg-tertiary after:dark:bg-dark-tertiary after:h-[1px] after:w-full">
      <h2 className="text-nowrap">{title}</h2>
    </div>
  );
};

export default SectionTitle;
