import { sideLinksClass, socialMedia } from "@/config";
import SocialIcon from "./SocialIcon";

const SocialMediaIcons = () => {
  return socialMedia.map(({ url, name }, index) => (
    <a
      key={index}
      href={url}
      target="_blank"
      className="transition-all hover:-translate-y-1 hover:text-black dark:hover:text-dark-secondary"
    >
      <SocialIcon name={name} />
    </a>
  ));
};

export default SocialMediaIcons;
