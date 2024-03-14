import { technologies } from "@/config";
import Image from "next/image";

const Technologies = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map(({ name, src }, index) => (
        <Image
          key={index}
          src={src}
          alt={name}
          height={40}
          width={40}
          className="w-10 h-10"
        />
      ))}
    </div>
  );
};

export default Technologies;
