import { ProjectContent } from "@/features/projects/utils/interfaces";

export const projectsInfo: ProjectContent[] = [
  {
    name: "advanceTodo",
    githubUrl:
      "https://github.com/luiscastrillo97/vite-react-tailwind-todo-frondendmentor",
    deployUrl: "https://frontendmentortodo.netlify.app/",
    title: "Advance Todo",
    description:
      "This tool is based on the Todo app challenge from Frontend Mentor.\
        It has a responsive design, an it allows you to switch between\
        dark and light themes, add the tasks you want, filter by active\
        and completed tasks, delete all completed tasks with a single\
        click, and sort the tasks as you wish.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "hello-pangea/dnd",
      "Netlify",
    ],
  },
  {
    name: "urlShortener",
    githubUrl:
      "https://github.com/luiscastrillo97/react-router6_4-firebase9-vite",
    deployUrl: "https://contextreactrouter-1.web.app/",
    title: "URL Shortener",
    description:
      "This tool allows you to manage your URLs to share them with\
        whoever you want. Also, since it is integrated with Firebase,\
        you can register, log in and store your urls. It has a\
        responsive design.",
    technologies: ["React", "Vite", "Tailwind CSS", "Flowbite", "Firebase"],
  },
  {
    name: "simpleTodo",
    githubUrl: "https://github.com/luiscastrillo97/todo_app_initial",
    deployUrl: "https://todoappluiscastrillo.netlify.app/",
    title: "Simple TODO",
    description:
      "This tool allows you to add, complete and delete the tasks you\
        want. It has an responsive design.",
    technologies: ["React", "Vite", "Bootstrap", "SweetAlert2", "Netlify"],
  },
];
