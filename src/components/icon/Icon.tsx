import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { IconName } from "@/interfaces";

interface Props {
  name: IconName;
  size?: number;
}

const Icon = ({ name, size = 20 }: Props) => {
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

export default Icon;
