import { socialMedia } from "@/config";
import SocialIcon from "./SocialIcon";

const SocialMediaIcons = () => {
  return socialMedia.map(({ url, name }, index) => (
    <a
      key={index}
      href={url}
      target="_blank"
      className="transition-all hover:-translate-y-1"
    >
      <SocialIcon name={name} />
    </a>
  ));
};

export default SocialMediaIcons;
