import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";

export type SocialMediaIcon =
  | "github"
  | "linkedin"
  | "instagram"
  | "twitter"
  | "openLink";
interface Props {
  name: SocialMediaIcon;
  size?: number;
}

const SocialIcon = ({ name, size = 20 }: Props) => {
  switch (name) {
    case "github":
      return <FiGithub size={size} />;
      break;
    case "linkedin":
      return <FiLinkedin size={size} />;
      break;
    case "instagram":
      return <FiInstagram size={size} />;
      break;
    case "twitter":
      return <FaXTwitter size={size} />;
      break;
    case "openLink":
      return <MdOpenInNew size={22} />;
      break;
    default:
      break;
  }
};

export default SocialIcon;
