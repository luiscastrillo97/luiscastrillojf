import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string | undefined;
}

const Button = ({ children, href = "#" }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className="p-3 bg-primary text-primary font-semibold rounded-md border border-primary hover:bg-secondary dark:text-dark-primary dark:bg-dark-primary dark:border-dark-primary dark:hover:bg-dark-secondary"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default Button;
