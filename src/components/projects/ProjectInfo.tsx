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
      <h2 className="z-10 font-semibold text-2xl">{title}</h2>
      <div className="z-10 md:p-5 md:rounded-md md:dark:bg-dark-secondary md:bg-secondary">
        <p className="dark:text-dark-primary">{description}</p>
      </div>
      <ul
        className={`z-10 flex flex-wrap gap-5 ${toRight && "md:justify-end"}`}
      >
        {technologies.map((technology, index) => (
          <li key={index} className="dark:text-white">
            {technology}
          </li>
        ))}
      </ul>
      <ProjectLinks githubUrl={githubUrl} deployUrl={deployUrl} />
    </>
  );
};

export default ProjectInfo;
