import ProjectIconLink from "./ProjectIconLink";

interface Props {
  githubUrl: string | undefined;
  deployUrl: string | undefined;
}

const ProjectLinks = ({ githubUrl, deployUrl }: Props) => {
  return (
    <div className="flex w-auto z-10 gap-5">
      <ProjectIconLink name="github" url={githubUrl} />
      <ProjectIconLink name="openLink" url={deployUrl} />
    </div>
  );
};

export default ProjectLinks;
