import { SectionTitle } from "@/components/sectionTitle";
import { ProjectList } from "@/features/projects/components";

const Projects = () => {
  return (
    <section id="projects" className="py-24 h-fit flex flex-col">
      <SectionTitle title="Showtime" />
      <ProjectList />
    </section>
  );
};

export default Projects;
