import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const LeftSide = () => {
  return (
    <div className="fixed bottom-0 left-0 w-[9.5%] h-80">
      <div className="h-full flex justify-center">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col gap-8">
            <a href="https://github.com/luiscastrillo97" target="_blank">
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/luiscastrillojf/"
              target="_blank"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/luis_castrillojf/"
              target="_blank"
            >
              <FiInstagram />
            </a>
            <a href="https://twitter.com/casfer_luis" target="_blank">
              <FaXTwitter />
            </a>
          </div>
          <div className="h-24 bg-black w-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
