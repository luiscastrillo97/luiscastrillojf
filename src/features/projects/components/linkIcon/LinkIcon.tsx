import { Icon } from "@/components";
import { IconName } from "@/interfaces";

interface Props {
  name: IconName;
  url: string | undefined;
}

const LinkIcon = ({ name, url }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
      <Icon name={name} size={22} />
    </a>
  );
};

export default LinkIcon;
