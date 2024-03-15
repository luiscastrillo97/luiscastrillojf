import ProjectLinks from "./ProjectLinks";
import { ProjectContent } from "@/interfaces";

interface Props {
  info: ProjectContent;
  toRight: boolean;
}

const ProjectInfo = ({ info, toRight }: Props) => {
  const { title, description, technologies, githubUrl, deployUrl } = info;
  return (
    <>
      <h2 className="z-10 font-semibold text-2xl px-10 md:p-0">{title}</h2>
      <div className="z-0 px-10 py-5 flex flex-col gap-5 bg-secondary md:p-0 md:bg-transparent dark:bg-transparent">
        <div className="z-10 md:p-5 md:rounded-md md:dark:bg-dark-secondary md:bg-secondary">
          <p className="dark:text-dark-primary">{description}</p>
        </div>
        <ul
          className={`z-10 flex flex-wrap gap-x-5 gap-y-2 ${
            toRight && "md:justify-end"
          }`}
        >
          {technologies.map((technology, index) => (
            <li key={index} className="dark:text-white">
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <ProjectLinks githubUrl={githubUrl} deployUrl={deployUrl} />
    </>
  );
};

export default ProjectInfo;
