import { ProjectContent } from "@/interfaces";
import { ProjectImage, ProjectInfo } from "@/features/projects/components";

interface Props {
  data: ProjectContent;
  toRight: boolean;
}

const Body = ({ data, toRight = true }: Props) => {
  const { deployUrl, name } = data;
  return (
    <article className="pt-10">
      <div className="relative md:w-auto md:grid md:grid-cols-12">
        <div
          id="image"
          className={`absolute rounded-md overflow-hidden h-full z-0 md:h-auto md:relative md:row-span-full md:self-center md:border md:border-black md:border-primary/20 ${
            toRight
              ? "md:col-start-1 md:col-span-7"
              : "md:col-span-7 md:col-end-13"
          }`}
        >
          <ProjectImage href={deployUrl} project={name} />
        </div>
        <div
          className={`flex flex-col gap-4 py-10 md:p-0 md:row-span-full md:self-center ${
            toRight
              ? "md:col-span-8 md:col-end-13 md:text-right md:items-end lg:col-span-6 lg:col-end-13"
              : "md:col-start-1 md:col-span-8 md:text-left md:items-start lg:col-start-1 lg:col-span-6"
          }`}
        >
          <ProjectInfo info={data} toRight={toRight} />
        </div>
      </div>
    </article>
  );
};

export default Body;
