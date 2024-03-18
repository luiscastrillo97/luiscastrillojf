import { socialMedia } from "@/content/socialMedia";
import { Icon } from "@/components";

const SocialMediaList = () => {
  return socialMedia.map(({ url, name }, index) => (
    <a
      key={index}
      href={url}
      target="_blank"
      className="transition-all hover:-translate-y-1 hover:text-black dark:hover:text-dark-secondary"
    >
      <Icon name={name} />
    </a>
  ));
};

export default SocialMediaList;
