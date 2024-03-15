import Image from "next/image";
import urlShortener from "@/content/projects/images/url-shortener.png";
import simpleTodo from "@/content/projects/images/simple-todo.png";
import advanceTodo from "@/content/projects/images/advance-todo-light.png";

export type ProjectName = "urlShortener" | "simpleTodo" | "advanceTodo";

interface Props {
  href: string | undefined;
  project: ProjectName;
}

const ProjectImage = ({ href, project }: Props) => {
  const getImage = () => {
    switch (project) {
      case "advanceTodo":
        return (
          <Image
            src={advanceTodo}
            alt="Advance Todo Image"
            className="h-full object-cover"
          />
        );
        break;
      case "urlShortener":
        return (
          <Image
            src={urlShortener}
            alt="URL Shortener Image"
            className="h-full object-cover"
          />
        );
        break;
      case "simpleTodo":
        return (
          <Image
            src={simpleTodo}
            alt="Simple Todo Image"
            className="h-full object-cover"
          />
        );
        break;
    }
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block rounded-md overflow-hidden h-full opacity-50 hover:opacity-100 md:opacity-80 md:w-full before:absolute before:top-0 before:w-full before:h-full before:bg-secondary/80 before:dark:bg-dark-primary/90 md:before:bg-secondary/40 md:before:dark:bg-dark-tertiary/40 md:before:hover:bg-transparent md:before:hover:dark:bg-transparent"
    >
      {getImage()}
    </a>
  );
};

export default ProjectImage;
