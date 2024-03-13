import { sideLinksClass, socialMedia } from "@/config";
import SocialIcon from "./SocialIcon";

const SocialMediaIcons = () => {
  return socialMedia.map(({ url, name }, index) => (
    <a key={index} href={url} target="_blank" className={sideLinksClass}>
      <SocialIcon name={name} />
    </a>
  ));
};

export default SocialMediaIcons;
