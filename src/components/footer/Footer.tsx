import SocialMediaIcons from "../fixedSides/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="text-center flex flex-col items-center gap-5">
        <div className="flex justify-center items-center gap-5 md:hidden">
          <SocialMediaIcons />
        </div>
        <a
          href="https://github.com/luiscastrillo97/luiscastrillojf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <div>Built by Luis Castrillo</div>
          <div>Inspired by Brittany Chiang&apos;s Design</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
