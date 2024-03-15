import { SocialIcon } from "../fixedSides";
import { SocialMediaIcon } from "../fixedSides/SocialIcon";

interface Props {
  name: SocialMediaIcon;
  url: string | undefined;
}

const ProjectIconLink = ({ name, url }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
      <SocialIcon name={name} size={22} />
    </a>
  );
};

export default ProjectIconLink;
