import { LinkIcon } from "@/features/projects/components/linkIcon";

interface Props {
  githubUrl: string | undefined;
  deployUrl: string | undefined;
}

const Links = ({ githubUrl, deployUrl }: Props) => {
  return (
    <div className="flex px-10 w-auto z-10 gap-5 md:p-0">
      <LinkIcon name="github" url={githubUrl} />
      <LinkIcon name="openLink" url={deployUrl} />
    </div>
  );
};

export default Links;
