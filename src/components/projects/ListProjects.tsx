import { showtimeProjects } from "@/config";
import Project from "./Project";

const ListProjects = () => {
  const isPar = (num: number) => {
    return num % 2 === 0;
  };
  return (
    <>
      {showtimeProjects.map((projectInfo, index) => {
        return (
          <Project key={index} data={projectInfo} toRight={isPar(index)} />
        );
      })}
    </>
  );
};

export default ListProjects;
