import { ProjectBody } from "@/features/projects/components";
import { projectsInfo } from "@/features/projects/content/projectsInfo";

const List = () => {
  const isPar = (num: number) => {
    return num % 2 === 0;
  };
  return (
    <>
      {projectsInfo.map((projectInfo, index) => {
        return (
          <ProjectBody key={index} data={projectInfo} toRight={isPar(index)} />
        );
      })}
    </>
  );
};

export default List;
