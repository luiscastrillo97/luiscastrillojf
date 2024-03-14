import { ExperienceContent } from "@/interfaces";

interface Props {
  content: ExperienceContent[];
}

const ExperienceContents = ({ content }: Props) => {
  return (
    <>
      {content.map(({ title, date, description }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <h4 className="text-secondary dark:text-dark-tertiaty font-medium">
              {date}
            </h4>
          </div>
          <ul className="block list-disc list-outside pl-5">
            <li className="list-item">
              <span className="text-[0.95rem] text-primary/90 dark:text-quaternary">
                {description}
              </span>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default ExperienceContents;
