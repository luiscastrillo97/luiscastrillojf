import Image from "next/image";
import urlShortener from "@/content/projects/images/url-shortener.png";
import simpleTodo from "@/content/projects/images/simple-todo.png";
import advanceTodo from "@/content/projects/images/advance-todo-light.png";
import { FiGithub } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";
import { SectionTitle } from "../titlesAndParagraphs";
import { Project } from "../projects";
import ListProjects from "../projects/ListProjects";

const Work = () => {
  return (
    <section id="projects" className="py-24 h-fit flex flex-col">
      <SectionTitle title="Showtime" />
      <ListProjects />
    </section>
  );
};

export default Work;
