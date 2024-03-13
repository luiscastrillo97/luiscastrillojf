import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  name: string;
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
    default:
      break;
  }
};

export default SocialIcon;
