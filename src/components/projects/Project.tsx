import { showtimeProjects } from "@/config";
import ProjectImage from "./ProjectImage";
import { ProjectContent } from "@/interfaces";
import ProjectInfo from "./ProjectInfo";

interface Props {
  data: ProjectContent;
  toRight: boolean;
}

const Project = ({ data, toRight = true }: Props) => {
  const { deployUrl, name } = data;
  return (
    <article className="pt-10">
      <div className="relative md:w-auto md:grid md:grid-cols-12">
        <div
          id="image"
          className={`absolute h-full z-0 md:h-auto md:relative md:row-span-full md:self-center ${
            toRight
              ? "md:col-start-1 md:col-span-7"
              : "md:col-span-7 md:col-end-13"
          }`}
        >
          <ProjectImage href={deployUrl} project={name} />
        </div>
        <div
          className={`flex flex-col gap-4 p-10 md:p-0 md:row-span-full md:self-center ${
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

export default Project;
