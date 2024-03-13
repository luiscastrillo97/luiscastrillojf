import { navLinksClass } from "@/config";

const Icon = () => {
  return (
    <a href="/" className={navLinksClass}>
      <p className="text-xl font-semibold text-nowrap">{`<LC />`}</p>
    </a>
  );
};

export default Icon;
