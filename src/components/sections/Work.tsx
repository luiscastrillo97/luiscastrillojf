import Image from "next/image";
import urlShortener from "@/content/projects/images/url-shortener.png";
import simpleTodo from "@/content/projects/images/simple-todo.png";
import advanceTodo from "@/content/projects/images/advance-todo-light.png";
import { FiGithub } from "react-icons/fi";
import { MdOpenInNew } from "react-icons/md";

const Work = () => {
  return (
    <section id="projects" className="py-24 h-fit flex flex-col">
      <h2 className="text-3xl">Some Things I Have Built</h2>
      <article className="my-10">
        <div className="grid grid-cols-12">
          <div
            id="image"
            className="row-span-full col-start-1 col-span-7 self-center z-0"
          >
            <a
              href="https://frontendmentortodo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-70 hover:opacity-100"
            >
              <Image src={advanceTodo} alt="Advance Todo Image" />
            </a>
          </div>
          <div className="row-span-full col-span-6 col-end-13 self-center text-right flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">Advance TODO</h2>
            <div className="z-10 bg-blue-500 p-5 rounded-md">
              <p className="text-white">
                This tool is based on the Todo app challenge from Frontend
                Mentor. It has a responsive design, an it allows you to switch
                between dark and light themes, add the tasks you want, filter by
                active and completed tasks, delete all completed tasks with a
                single click, and sort the tasks as you wish.
              </p>
            </div>
            <ul className="z-10 flex justify-end gap-5 flex-wrap">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>hello-pangea/dnd</li>
              <li>Netlify</li>
            </ul>

            <div className="flex justify-end gap-5">
              <a
                href="https://github.com/luiscastrillo97/vite-react-tailwind-todo-frondendmentor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://frontendmentortodo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOpenInNew size={22} />
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className="my-10">
        <div className="grid grid-cols-12">
          <div className="row-span-full col-start-1 col-span-6 self-center text-left flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">URL Shortener</h2>
            <div className="z-10 bg-blue-500 p-5 rounded-md">
              <p className="text-white">
                This tool allows you to manage your URLs to share them with
                whoever you want. Also, since it is integrated with Firebase,
                you can register, log in and store your urls. It has an adaptive
                design.
              </p>
            </div>
            <ul className="z-10 flex justify-start gap-5 flex-wrap">
              <li>React</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>Flowbite</li>
              <li>Firebase</li>
            </ul>

            <div className="flex justify-start gap-5">
              <a
                href="https://github.com/luiscastrillo97/react-router6_4-firebase9-vite"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://contextreactrouter-1.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOpenInNew size={22} />
              </a>
            </div>
          </div>
          <div className="row-span-full col-span-7 col-end-13 self-center z-0">
            <a
              href="https://contextreactrouter-1.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-70 hover:opacity-100"
            >
              <Image src={urlShortener} alt="url shortener image" />
            </a>
          </div>
        </div>
      </article>
      <article className="my-10">
        <div className="grid grid-cols-12">
          <div
            id="image"
            className="row-span-full col-start-1 col-span-7 self-center z-0"
          >
            <a
              href="https://todoappluiscastrillo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" opacity-70 hover:opacity-100"
            >
              <Image src={simpleTodo} alt="Advance Todo Image" />
            </a>
          </div>
          <div className="row-span-full col-span-6 col-end-13 self-center text-right flex flex-col gap-4">
            <h2 className="font-semibold text-2xl">Simple TODO</h2>
            <div className="z-10 bg-blue-500 p-5 rounded-md">
              <p className="text-white">
                This tool allows you to add, complete and delete the tasks you
                want. It has an adaptive design.
              </p>
            </div>
            <ul className="z-10 flex justify-end gap-5 flex-wrap">
              <li>React</li>
              <li>Vite</li>
              <li>Bootstrap</li>
              <li>SweetAlert2</li>
              <li>Netlify</li>
            </ul>

            <div className="flex justify-end gap-5">
              <a
                href="https://github.com/luiscastrillo97/todo_app_initial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://todoappluiscastrillo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOpenInNew size={22} />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Work;
